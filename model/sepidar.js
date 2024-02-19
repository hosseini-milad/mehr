<<<<<<< HEAD
const mongoose = require("mongoose");

const sepidarSchema = new mongoose.Schema({
  token: { type: String},
  modulus:{ type: String},
  exponent: { type: String },
  registerCode: { type: String , unique: true}  
});

=======
const mongoose = require("mongoose");

const sepidarSchema = new mongoose.Schema({
  token: { type: String},
  modulus:{ type: String},
  exponent: { type: String },
  registerCode: { type: String , unique: true}  
});

>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model("sepidar", sepidarSchema);