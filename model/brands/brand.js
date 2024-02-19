<<<<<<< HEAD
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const BrandSchema = new Schema({
    title:  String,
    enTitle:String,
    lenzIndex:[String],
    material: [String],
    Coating:[String],
    purchase:String,
    imageUrl: String,
    
})
=======
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const BrandSchema = new Schema({
    title:  String,
    enTitle:String,
    lenzIndex:[String],
    material: [String],
    Coating:[String],
    purchase:String,
    category:String,
    factory:{type:Array,default:[]},
    imageUrl: String,
    
})
>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model('brands',BrandSchema);