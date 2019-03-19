const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  url: String,
  code: String
});

module.exports = mongoose.model("Url", urlSchema);
