const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  userId:{type: mongoose.Schema.Types.ObjectId, ref: 'user'},
<<<<<<< HEAD
=======
  stockId: {type: String},
  payStatus: {type: String},
>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
  manageId: {type: String},
  group: { type: String },
  stockOrderNo:{type:String},
  carNo: { type: String },
  ghabzIn:{ type: String },
  ghabzOut:{ type: String },
  cert:{ type: String },

  stockOrderPrice:{type:String},
<<<<<<< HEAD
=======
  credit:{type:String},
  freeCredit:{type:String},
>>>>>>> 72932be0b5684929db33bcf1eec239e9ca6e819e
  stockFaktor:[{type:Object}],
  stockFaktorOrg:[{type:Object}],
  status:{ type: String },
  description:{ type: String },
  date:{ type: Date }, 
  loadDate:{ type: Date },
  loadDateOrg:{ type: Date },
  inDate:{ type: Date },
  outDate:{ type: Date },
  progressDate:{ type: Date },
});

module.exports = mongoose.model("orders", OrdersSchema);