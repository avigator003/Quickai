const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let user = new Schema({
  
  FirstName: String,
  LastName: String,
  admin: {type:Boolean,default:true},
  Email:String,
  password:String,
});

module.exports = mongoose.model("User", user);