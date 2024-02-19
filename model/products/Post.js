<<<<<<< HEAD
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const PostSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  enTitle:  String,
  description:String,
  fullDesc:String,
  imageUrl: String,
  categories: {type: mongoose.Schema.Types.ObjectId, ref: 'categories'},
  
  date: { type: Date, default: Date.now }
})
=======
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const PostSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  enTitle:  String,
  description:String,
  fullDesc:String,
  imageUrl: String,
  categories: {type: mongoose.Schema.Types.ObjectId, ref: 'categories'},
  
  date: { type: Date, default: Date.now }
})
>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model('Post',PostSchema);