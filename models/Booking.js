const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  ride: { type: mongoose.Schema.Types.ObjectId, ref: 'Ride' },
  passenger: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['booked', 'cancelled', 'completed'], default: 'booked' },
  seatsBooked: Number,
  bookingDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
