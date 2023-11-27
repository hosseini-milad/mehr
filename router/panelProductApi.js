const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const router = express.Router()
const auth = require("../middleware/auth");
var ObjectID = require('mongodb').ObjectID;

const ProductSchema = require('../model/Order/sepidarstock');
//const BrandSchema = require('../model/products/brand')
const category = require('../model/products/category');

/*Product*/
router.post('/fetch-product',jsonParser,async (req,res)=>{
    var productId = req.body.productId?req.body.productId:''
    try{
        if(!productId){
            res.json({filter:{}})
            return
        } 
        const productData = await ProductSchema.findOne({_id: ObjectID(productId)})
        //const brandList = await BrandSchema.find({})
        const categoryList = await category.find({})
       res.json({filter:productData,categoryList:categoryList})
    }
    catch(error){
        res.status(500).json({message: error.message})
    } 
})
router.post('/list-product',jsonParser,async (req,res)=>{
    var pageSize = req.body.pageSize?req.body.pageSize:"10";
    var offset = req.body.offset?(parseInt(req.body.offset)*parseInt(pageSize)):0;
    try{const data={
        category:req.body.category,
        title:req.body.title,
        sku:req.body.sku,
        brand:req.body.brand,
        active:req.body.active,
        offset:req.body.offset,
        pageSize:pageSize
    }
        const productList = await ProductSchema.aggregate([
            { $match:data.title?{title:new RegExp('.*' + data.title + '.*')}:{}},
            { $match:data.sku?{sku:new RegExp('.*' + data.sku + '.*')}:{}},
            { $match:data.category?{category:data.category}:{}},
            { $match:data.active?{enTitle:{ $exists: true}}:{}},
            
            ])
            const products = productList.slice(offset,
                (parseInt(offset)+parseInt(pageSize)))  
            
            
           res.json({filter:products,
            size:productList.length,full:productList})
    }
    catch(error){
        res.status(500).json({message: error.message})
    } 
})
router.post('/editProduct',jsonParser,async(req,res)=>{
    var productId= req.body.productId?req.body.productId:''
    if(productId === "new")productId=''
    try{ 
        const data = {
            title:  req.body.title,
            catId: req.body.catId,
            brandId: req.body.brandId,
            sharifId: req.body.sharifId,
            type:req.body.type,
            value:req.body.value,
            enTitle:req.body.enTitle,
            description:req.body.description,
            fullDesc:req.body.fullDesc,
            productUrl:req.body.productUrl,
            metaTitle: req.body.metaTitle,
            productMeta:req.body.productMeta,
            sku: req.body.sku,
            productCode: req.body.productCode,
            price: req.body.price,
            freePrice: req.body.freePrice,
            quantity: req.body.quantity,
            sort: req.body.sort,
            imageUrl:  req.body.imageUrl,
            thumbUrl:  req.body.thumbUrl
        }
        var productResult = ''
        if(productId) productResult=await ProductSchema.updateOne({_id:productId},
            {$set:data})
        else
        productResult= await ProductSchema.create(data)
        
        res.json({result:productResult,success:productId?"Updated":"Created"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.post('/updateProduct',jsonParser,async(req,res)=>{
    var productId= req.body.productId?req.body.productId:''
    productId=filterNumber(productId)
    if(productId === "new")productId=''
    try{ 
        const newRawData = await fetch(OLD_SITE_URL+"/api/v1/getProduct/"+productId,
            {method: 'GET' ,headers:{"content-type": "application/json"}});
        var result = ''
        try{result =await newRawData.json()}
        catch{
            res.status(400).json({error:"Api not find"})
            return
        }
        const newData = result.data
        const location = "/upload/product/"
        const imageUrl = newData.image_url?location+productId+"."+newData.image_url.split('.').pop():
            "https://sharifoilco.com/images/motor-oil.jpg"
        const thumbUrl = newData.image_url?location+productId+"Thumb."+newData.image_url.split('.').pop():
            "https://sharifoilco.com/images/motor-oil.jpg"
        var status = 0
        await download(OLD_SITE_URL+newData.image_url,imageUrl , function(){
            status=1;
        });
        await resizeImage(imageUrl,thumbUrl)
        //const newImage = resultImage
        //console.log(resultImage)
        res.json({data:newData,image:imageUrl,thumb:thumbUrl,
            success:productId?"Updated":"Created"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
var download =async function(uri, filename, callback){
    return new Promise(resolve => {
    request.head(uri, function(err, res, body){
      request(encodeURI(uri)).pipe(fs.createWriteStream("."+filename)).on('close', resolve);
      
    })})
  };

module.exports = router;