<<<<<<< HEAD
const mongoose = require("mongoose");

const mgminfoSchema = new mongoose.Schema({
  shopCode: { type: String},
  shopTitle: { type: String},
  address:{type: String},
  phone: { type: String},
  email: { type: String},
  fax:{type: String},
  instagram: { type: String},
  telegram: { type: String},
  whatsapp:{type: String},
  eitaa :{type: String}
});

=======
const mongoose = require("mongoose");

const mgminfoSchema = new mongoose.Schema({
  shopCode: { type: String},
  shopTitle: { type: String},
  address:{type: String},
  phone: { type: String},
  email: { type: String},
  fax:{type: String},
  instagram: { type: String},
  telegram: { type: String},
  whatsapp:{type: String},
  eitaa :{type: String}
});

>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model("mgminfo", mgminfoSchema);