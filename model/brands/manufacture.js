<<<<<<< HEAD
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const ManufactureStateSchema = new Schema({
    title:  String,
    enTitle:String,
    state:{
        type:String,
        enum:["فعال","غیرفعال"]
    }
    
})
=======
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const ManufactureStateSchema = new Schema({
    title:  String,
    enTitle:String,
    state:{
        type:String,
        enum:["فعال","غیرفعال"]
    }
    
})
>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model('manstate',ManufactureStateSchema);