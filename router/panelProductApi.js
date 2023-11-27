const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const router = express.Router()
const auth = require("../middleware/auth");
var ObjectID = require('mongodb').ObjectID;

const ServiceSchema = require('../model/products/Services');

router.post('/list',jsonParser,async (req,res)=>{
    var pageSize = req.body.pageSize?req.body.pageSize:"10";
    var nowDate = new Date();
    try{const data={
        orderNo:req.body.orderNo,
        status:req.body.status,
        customer:req.body.customer,
        offset:req.body.offset,
        brand:req.body.brand,
        pageSize:pageSize
    }
        const serviceList = await ServiceSchema.find()
       res.json({data:serviceList})
    }
    catch(error){
        res.status(500).json({message: error.message})
    } 
})

module.exports = router;