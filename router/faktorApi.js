const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const router = express.Router()
var ObjectID = require('mongodb').ObjectID;
const auth = require("../middleware/auth");
const productSchema = require('../model/Order/sepidarstock');
const category = require('../model/products/category');
const cart = require('../model/Order/Cart');
const users = require('../model/user');
const tasks = require('../model/crm/tasks');
const CreateTask = require('../middleware/CreateTask');
const Cart = require('../model/Order/Cart');
const calcCart = require('../middleware/CalcCart');
const orders = require('../model/Order/orders');
const sendSmsUser = require('../AdminPanel/components/sendSms');
const {TaxRate} = process.env

router.post('/products', async (req,res)=>{
    try{
        const allProducts = await calcCart()

        //logger.warn("main done")
        res.json({products:allProducts})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/list-filters', async (req,res)=>{
    try{
        const catData = await category.find({parent:{$exists:false}})
        const products = await productSchema.find({})
        for(var i =0;i<catData.length;i++){
            var subCat = await category.find(
                {"parent._id":(catData[i]._id).toString()})
            catData[i].children = subCat
        } 
        //logger.warn("main done")
        res.json({cats:catData,products:products})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/fetch-cart',auth, async (req,res)=>{
    const userData = await users.findOne({_id:ObjectID(req.headers["userid"])})
    const searchProducts = await calcCart(userData)
        try{    res.json({data:searchProducts,success:"200"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/find-products',auth, async (req,res)=>{
    const search = req.body.search
        var filter =''
        //if(userData.group === "bazaryab") filter = "fs"
        const searchProducts = await productSchema.
        aggregate([{$match:
            search?{$or:[
                {sku:{$regex: search, $options : 'i'}},
                {title:{$regex: search, $options : 'i'}}
            ]}:{sku:{$exists:true}}
        },
        ])
        try{    res.json({products:searchProducts})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/update-cart',jsonParser, async (req,res)=>{
    const userId=req.headers['userid']
    const data={
        userId:userId,
        sku:req.body.sku,
        title:req.body.title,
        weight:req.body.weight,
        count:req.body.count,
        price:req.body.price,
        date:req.body.date,

    }
    try{
        const userData = await users.findOne({_id:userId})
        var status = "";
        console.log(data)
        //const cartData = await cart.find({userId:userId})
        //const qCartData = await Cart.findOne({userId:userId})
        const repCart = await Cart.findOne({userId:userId,sku:data.sku})
        if(repCart) {
            var newCount = parseInt(repCart.count)
            newCount += parseInt(data.count)
            data.count = newCount
            await Cart.updateOne({_id:repCart._id},{$set:data})
        }
        else await Cart.create(data)
        const cartDetail = await calcCart(userData)
        res.json({...cartDetail,message:"آیتم اضافه شد"})
    } 
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/remove-cart', async (req,res)=>{
    const userId =req.headers['userid'];
    const cartID=req.body.cartID
    try{
        const cartList = await cart.deleteOne({_id:ObjectID(cartID)})
        const userData = await users.findOne({_id:userId})
        const searchProducts = await calcCart(userData)
        res.json({cart:searchProducts,message:"Cart Removed"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/update-item', async (req,res)=>{
    const userId =req.headers['userid'];
    const cartID=req.body.cartID
    const count = req.body.count
    try{
        const cartList = await cart.updateOne({_id:ObjectID(cartID)},
            {$set:{count:count}})
        const userData = await users.findOne({_id:userId})
        const searchProducts = await calcCart(userData)
        res.json({cart:searchProducts,message:"Cart Updated"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/create-order',auth, async (req,res)=>{
    const userId =req.headers['userid'];
    const loadDate = req.body.loadDate;
    const orderNo = await checkRep("Nc");
    const userData = await users.findOne({_id:userId})
    const cartData = await calcCart(userData)
    //console.log(cartData)
    const data = {
        userId:req.headers["userid"],
        stockOrderNo:orderNo,
        stockOrderPrice:cartData.price,
        stockFaktor:cartData.carts,
        description:req.body.description,
        freeCredit:req.body.freeCredit,
        credit:cartData.remainCredit,
        stockFaktorOrg:cartData.carts,
        status:"inprogress",
        date: Date.now(),
        loadDate:loadDate,
        loadDateOrg:loadDate
    } 
    try{
        if(!data.stockFaktor||!data.stockFaktor.length){
            res.status(400).json({error: "کالا انتخاب نشده است"})
            return
        }
        //const searchProducts = await calcCart(userData)
        var taskData=''
        try{
            taskData = await CreateTask("order",data)} catch{}
        const stockData = await orders.create(data)//{_id:req.body.id},{$set:data})
        await cart.deleteMany({userId:data.userId})
        await sendSmsUser(data.userId,process.env.regOrder,".","rxOrderNo",data.status)
        res.json({stock:stockData,task:taskData,message:"order register"})

    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
const checkRep=async(userNo,dateYear)=>{
    var rxTemp = '';
    while(1){
        
        const foundRx = rxTemp&&await orders.findOne({stockOrderNo:rxTemp});
        if(rxTemp&&!foundRx)break
        else rxTemp=userNo+
            (Math.floor(Math.random() * 1000000) + 100000)
    }
    return(rxTemp)

}
module.exports = router;