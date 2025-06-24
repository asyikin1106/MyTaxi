const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  driver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  model: String,
  plateNumber: String,
  color: String,
  capacity: Number
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
