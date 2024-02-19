<<<<<<< HEAD
const mongoose = require("mongoose");

const KharidSchema = new mongoose.Schema({
  rxLenz: { type: String },
  rxCount:{ type: String },
  rxOrderNo:{type: String},
  rxFaktorNo:{type: String},
  rxFaktorName:{type: String},
 
  date:{ type: Date },
});

=======
const mongoose = require("mongoose");

const KharidSchema = new mongoose.Schema({
  rxLenz: { type: String },
  rxCount:{ type: String },
  rxOrderNo:{type: String},
  rxFaktorNo:{type: String},
  rxFaktorName:{type: String},
 
  date:{ type: Date },
});

>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model("kharid", KharidSchema);