<<<<<<< HEAD
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const MenuSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    enTitle: String,
    url:String,
    order:String,
    icon:   String,
    imageUrl: String,
    parent: {type: mongoose.Schema.Types.ObjectId, ref: 'Menu'},
})
=======
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const MenuSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    enTitle: String,
    url:String,
    order:String,
    icon:   String,
    imageUrl: String,
    parent: {type: mongoose.Schema.Types.ObjectId, ref: 'Menu'},
})
>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model('Menu',MenuSchema);