const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  phone: { type: String, unique: true },
  cName: { type: String},
  cCode:{ type: String},
  password: { type: String },
  email: { type: String },
  access:{
    type:String,
    enum:["manager","sale","security","customer","shop","request"]
  },
  group: {
    type:String
  },
  profile:{type:String},
  class: {type:Array,default:[]},
  credit: { type: String },
  credit1: { type: String },
  credit2: { type: String },
  fob: { type: String },
  token: { type: String },
  otp:{ type: String , default: null },
  sex: { type: String },
  mahiat: { type: String },
  meli: { type: String },
  activity: { type: String },
  mobile: { type: String },
  address: { type: String },
  state: { type: String },
  country: { type: String },
  city: { type: String },
  phone1: { type: String },
  fax: { type: String },
  avatar:{type:String},
  about: { type: String },
  state:{ type: String },
  date:{ type: String },
});

module.exports = mongoose.model("user", userSchema);