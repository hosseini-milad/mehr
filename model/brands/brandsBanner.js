<<<<<<< HEAD
const mongoose = require('mongoose');

const BrandBannerSchema = new mongoose.Schema({
    title:  String,
    description:   String,
    imageUrl: String,
    brand:{type: mongoose.Schema.Types.ObjectId, ref: 'brands'},
    date: { type: Date, default: Date.now },
    slogon:String,
})
=======
const mongoose = require('mongoose');

const BrandBannerSchema = new mongoose.Schema({
    title:  String,
    description:   String,
    imageUrl: String,
    brand:{type: mongoose.Schema.Types.ObjectId, ref: 'brands'},
    date: { type: Date, default: Date.now },
    slogon:String,
})
>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model('brandBanner',BrandBannerSchema);