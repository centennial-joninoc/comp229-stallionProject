var mongoose = require('mongoose');

var CarSchema = new mongoose.Schema({
  model: String,
  description: String,
  year: Number,
  seats: Number,
  transmission: String,
  fuelType: String,
  mileage: String
});

module.exports = mongoose.model('car', CarSchema)