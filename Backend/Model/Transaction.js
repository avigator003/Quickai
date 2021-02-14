const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let transaction = new Schema({
  AgentName: String,
  CompanyName: String,
  Username: String,
  BookId:String,
  DateTime:Date,
  Credit:Number,
  Debit:Number,
});

module.exports = mongoose.model("Transaction", transaction);