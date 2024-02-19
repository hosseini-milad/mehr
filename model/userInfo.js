<<<<<<< HEAD
const mongoose = require("mongoose");

const userInfoSchema = new mongoose.Schema({
  userName: { type: String, default: null },
  meliCode: { type: String , default: null },
  phone: { type: String , default: null },
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
  mobile: { type: String },
  email: { type: String },
  birthDate: { type: String },
  hesab:{ type: String },
  job: {type: String},
});

=======
const mongoose = require("mongoose");

const userInfoSchema = new mongoose.Schema({
  userName: { type: String, default: null },
  meliCode: { type: String , default: null },
  phone: { type: String , default: null },
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
  mobile: { type: String },
  email: { type: String },
  birthDate: { type: String },
  hesab:{ type: String },
  job: {type: String},
});

>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model("userInfo", userInfoSchema);