<<<<<<< HEAD
const mongoose = require("mongoose");

const userCreditSchema = new mongoose.Schema({
  userId: { type: String },
  
  creditValue: { type: String },
  creditTime: { type: String },
  creditDesc: { type: String },
  
});

=======
const mongoose = require("mongoose");

const userCreditSchema = new mongoose.Schema({
  userId: { type: String },
  
  creditValue: { type: String },
  creditTime: { type: String },
  creditDesc: { type: String },
  
});

>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model("usercredit", userCreditSchema);