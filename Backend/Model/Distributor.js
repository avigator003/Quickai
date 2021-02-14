const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let distributor = new Schema({
  FirstName: String,
  LastName: String,
  MobileNumber: String,
  Email:String,
  CompanyName:String,
  Address:String,
  City:String,
  State:String,
  PinCode:String,
  IsBlocked:Boolean,
  Commission:Number,
  OpeningValue:Number,
  GSTNumber:String,
  password:String,
});

module.exports = mongoose.model("Distributor", distributor);