<<<<<<< HEAD
const mongoose = require("mongoose");

const helpSchema = new mongoose.Schema({
  title: { type: String},
  description: { type: String},
  imageUrl: String,
});

=======
const mongoose = require("mongoose");

const helpSchema = new mongoose.Schema({
  title: { type: String},
  description: { type: String},
  imageUrl: String,
});

>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model("help", helpSchema);