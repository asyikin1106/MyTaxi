const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  booking: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking' },
  amount: Number,
  method: { type: String, enum: ['cash', 'card', 'e-wallet'] },
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
  paymentDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payment', paymentSchema);
