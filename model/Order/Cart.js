<<<<<<< HEAD
const mongoose = require("mongoose");
 
const CartSchema = new mongoose.Schema({
  userId: { type: String },
  sku:{ type: String },
  hesabfa:{type: String},
  align:{type: String},
  count:{type: String},
  price:{type: String},
    
  date:{ type: Date },
});

=======
const mongoose = require("mongoose");
 
const CartSchema = new mongoose.Schema({
  userId: { type: String },
  sku:{ type: String },
  weight:{type: Number},
  count:{type: Number},
  price:{type: Number},
    
  date:{ type: Date },
});

>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model("cart", CartSchema);