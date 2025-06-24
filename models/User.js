const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  role: { type: String, enum: ['driver', 'passenger'] },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
