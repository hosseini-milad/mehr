<<<<<<< HEAD
const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    title:  String, // String is shorthand for {type: String}
    parent: {type: mongoose.Schema.Types.ObjectId, ref: 'categories'},
    body:   String,
    description:String,
    color: String,
    imageUrl: String,
    date: { type: Date, default: Date.now }
    
})
=======
const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    title:  String, // String is shorthand for {type: String}
    catId: String,
    catCode:String,
    parent: String,
    body:   String,
    description:String,
    fullDesc: String,
    color: String,
    imageUrl: String,
    brands:{type:Array,default:[]},
    date: { type: Date, default: Date.now }
})
>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model('categories',CategorySchema);