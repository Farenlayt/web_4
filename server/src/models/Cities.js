const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CitiesSchema = new Schema({
  name: String,
});

const Cities = mongoose.model("Cities", CitiesSchema);
module.exports = Cities;
