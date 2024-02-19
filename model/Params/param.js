<<<<<<< HEAD
const mongoose = require("mongoose");

const paramSchema = new mongoose.Schema({
  title: { type: String},
  paramValue: { type: String},
  paramNegative: { type: String}
});

=======
const mongoose = require("mongoose");

const paramSchema = new mongoose.Schema({
  title: { type: String},
  paramValue: { type: String},
  paramNegative: { type: String}
});

>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model("params", paramSchema);