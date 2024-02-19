<<<<<<< HEAD
const mongoose = require("mongoose");

const lenzStockSchema = new mongoose.Schema({
  brandName: {type: String},
  lenzIndex: { type: String },
  material: { type: String },
  coating: { type: String },
  design: { type: String },

  sku:{ type: String , unique: true},

  od: { type: String },
  sphOD:{ type: String },
  cylOD:{ type: String },
  axisOD:{ type: String },
  addOD:{ type: String },
  os: { type: String },
  sphOS:{ type: String },
  cylOS:{ type: String },
  axisOS:{ type: String },
  addOS:{ type: String },

  priceOS: { type: String },
  discountOS:{ type: String },

  priceOD: { type: String },
  discountOD:{ type: String },
});

=======
const mongoose = require("mongoose");

const lenzStockSchema = new mongoose.Schema({
  brandName: {type: String},
  lenzIndex: { type: String },
  material: { type: String },
  coating: { type: String },
  design: { type: String },

  sku:{ type: String , unique: true},

  od: { type: String },
  sphOD:{ type: String },
  cylOD:{ type: String },
  axisOD:{ type: String },
  addOD:{ type: String },
  os: { type: String },
  sphOS:{ type: String },
  cylOS:{ type: String },
  axisOS:{ type: String },
  addOS:{ type: String },

  priceOS: { type: String },
  discountOS:{ type: String },

  priceOD: { type: String },
  discountOD:{ type: String },
});

>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model("stocks", lenzStockSchema);