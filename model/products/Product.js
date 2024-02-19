<<<<<<< HEAD
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    sku: String,
    enTitle:String,
    description:String,
    fullDesc:String,
    
    config:String,
    uploadImage:String,
    imageUrl: {
        type:String
    },
    imgGallery:String,
    imgGalleryUrl:{
        type:String 
    },
    price:String,
    categories:String
})
=======
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    sku: String,
    enTitle:String,
    description:String,
    fullDesc:String,
    
    config:String,
    uploadImage:String,
    imageUrl: {
        type:String
    },
    imgGallery:String,
    imgGalleryUrl:{
        type:String 
    },
    price:String,
    priceFree:String,
    categories:String
})
>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model('Product',ProductSchema);