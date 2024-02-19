<<<<<<< HEAD
const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema({
  title: { type: String},
  url:{type: String},
  shortDesc: { type: String},
  description: { type: String},
  meta:{type: String},
  imageUrl: String,
});

=======
const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema({
  title: { type: String},
  url:{type: String},
  shortDesc: { type: String},
  description: { type: String},
  meta:{type: String},
  imageUrl: String,
});

>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model("pages", pageSchema);