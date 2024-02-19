<<<<<<< HEAD
const mongoose = require("mongoose");

const orderLogSchema = new mongoose.Schema({
  status: { type: String},
  rxOrderNo:{ type: String},
  date:{ type: Date },
  user:{type:String}
});

=======
const mongoose = require("mongoose");

const orderLogSchema = new mongoose.Schema({
  status: { type: String},
  rxOrderNo:{ type: String},
  date:{ type: Date },
  user:{type:String}
});

>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model("orderlog", orderLogSchema);