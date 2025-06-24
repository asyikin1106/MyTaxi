const Ride = require('../models/Ride');

exports.createRide = async (req, res) => {
  try {
    const ride = new Ride(req.body);
    await ride.save();
    res.status(201).json(ride);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getRides = async (req, res) => {
  try {
    const rides = await Ride.find().populate('driver');
    res.json(rides);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
