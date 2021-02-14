const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let detail = new Schema({
  name: {
    type: String
  },
  age: {
    type: String
  }
});

module.exports = mongoose.model("detail", detail);