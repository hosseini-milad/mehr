<<<<<<< HEAD
const mongoose = require('mongoose');

const CoverSchema = new mongoose.Schema({
    option:  String,
    content:String,
    brand:String,
    sort:Number,
    price:String
})
=======
const mongoose = require('mongoose');

const CoverSchema = new mongoose.Schema({
    option:  String,
    content:String,
    brand:String,
    sort:Number,
    price:String
})
>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model('cover',CoverSchema);