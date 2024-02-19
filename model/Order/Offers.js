<<<<<<< HEAD
const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
  userId: {type: String},
  offerCode: {type: String},
  brandName: {type: String},
  category:{type: String},

  firstPurchase:{type: String},
  cachBack:{type: String},
  

  discountValue:{type: String},
  discountPercent:{type: String},
  minPrice: { type: String },
  maxDiscount: { type: String },
  
  sku:{ type: String},

  discountTimeFrom: { type: String },
  discountTimeTo:{ type: String },
  date:{ type: Date },

});

=======
const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
  userId: {type: String},
  offerCode: {type: String},
  brandName: {type: String},
  category:{type: String},

  firstPurchase:{type: String},
  cachBack:{type: String},
  

  discountValue:{type: String},
  discountPercent:{type: String},
  minPrice: { type: String },
  maxDiscount: { type: String },
  
  sku:{ type: String},

  discountTimeFrom: { type: String },
  discountTimeTo:{ type: String },
  date:{ type: Date },

});

>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model("offers", OfferSchema);