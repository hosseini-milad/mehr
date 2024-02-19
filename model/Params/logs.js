<<<<<<< HEAD
const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  title: { type: String},
  user: { type: String},
  phone: { type: String},
  description: { type: String},
  status: { type: String},
  kind:{ type: String},
  date:{ type: Date },
  modifyDate:{ type: Date },
});

=======
const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  title: { type: String},
  user: { type: String},
  phone: { type: String},
  description: { type: String},
  status: { type: String},
  kind:{ type: String},
  date:{ type: Date },
  modifyDate:{ type: Date },
});

>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
module.exports = mongoose.model("log", logSchema);