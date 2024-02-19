<<<<<<< HEAD
const mongoose = require('mongoose');

const TransferSchema = new mongoose.Schema({
    title:  String,
    enTitle:  String,
    sort:  Number,
    transCode:String
})
=======
const mongoose = require('mongoose');

const TransferSchema = new mongoose.Schema({
    title:  String,
    enTitle:  String,
    sort:  Number,
    transCode:String
})
>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model('transfer',TransferSchema);