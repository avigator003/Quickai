const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let markup = new Schema({
  
  ProductType: String,
  Amount: Number,
  MarkupType: String,
  AmountType:String,
  CreatedOn:Date,
  Airline:String,
  PaxTypes:String,
});

module.exports = mongoose.model("Markup", markup);