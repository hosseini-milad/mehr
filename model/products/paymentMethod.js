<<<<<<< HEAD
const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    title:  String,
    enTitle:  String,
    sort:  Number,
    paymentCode:String
})
=======
const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    title:  String,
    enTitle:  String,
    sort:  Number,
    paymentCode:String
})
>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model('payment',PaymentSchema);