<<<<<<< HEAD
const mongoose = require("mongoose");

const offerLogSchema = new mongoose.Schema({
  userId: { type: String},
  brandName:{ type: String},
  date:{ type: Date },
  discountPercent :{type:String}
});

=======
const mongoose = require("mongoose");

const offerLogSchema = new mongoose.Schema({
  userId: { type: String},
  brandName:{ type: String},
  date:{ type: Date },
  discountPercent :{type:String}
});

>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model("offerlog", offerLogSchema);