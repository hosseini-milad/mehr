<<<<<<< HEAD
const mongoose = require('mongoose');

const XtraSchema = new mongoose.Schema({
    title:  String,
    colorCode:String,
    colorPrice:String,
    sort:String,
    imageUrl: String
})
=======
const mongoose = require('mongoose');

const XtraSchema = new mongoose.Schema({
    title:  String,
    colorCode:String,
    colorPrice:String,
    sort:String,
    imageUrl: String
})
>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model('xtra',XtraSchema);