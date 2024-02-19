<<<<<<< HEAD
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    enTitle: String,
    icon:   String, 
})
=======
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    enTitle: String,
    icon:   String, 
})
>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model('Service',ServiceSchema);