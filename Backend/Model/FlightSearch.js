const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let flightsearch = new Schema({
  
  way: Number,
  from: String,
  to: String,
  departDate:String,
  arriveDate:String,
  flightClass:Number,
  adultCount:Number,
  childrenCount:Number,
  infantCount:Number,
  userid:String
  
});

module.exports = mongoose.model("FlightSearch", flightsearch);