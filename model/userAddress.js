<<<<<<< HEAD
const mongoose = require("mongoose");

const userAddressSchema = new mongoose.Schema({
  phone: { type: Number },
  userId:{ type: String },
  addressUserName: { type: String },
  address:{ type: String },
  state: { type: String },
  city: { type: String },
  addressPhone:{ type: String },
  postalCode:{ type: String },
  location:{ type: String },
});

=======
const mongoose = require("mongoose");

const userAddressSchema = new mongoose.Schema({
  phone: { type: Number },
  userId:{ type: String },
  addressUserName: { type: String },
  address:{ type: String },
  state: { type: String },
  city: { type: String },
  addressPhone:{ type: String },
  postalCode:{ type: String },
  location:{ type: String },
});

>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model("userAddress", userAddressSchema);