<<<<<<< HEAD
const mongoose = require('mongoose');

const SliderSchema = new mongoose.Schema({
    title:  String,
    description:   String,
    imageUrl: String,
    date: { type: Date, default: Date.now }
    
})
=======
const mongoose = require('mongoose');

const SliderSchema = new mongoose.Schema({
    title:  String,
    description:   String,
    imageUrl: String,
    date: { type: Date, default: Date.now }
    
})
>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model('sliders',SliderSchema);