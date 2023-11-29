const mongoose = require("mongoose");
 
const CartSchema = new mongoose.Schema({
  userId: { type: String },
  sku:{ type: String },
  weight:{type: Number},
  count:{type: Number},
  price:{type: Number},
    
  date:{ type: Date },
});

module.exports = mongoose.model("cart", CartSchema);