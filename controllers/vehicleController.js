const Vehicle = require('../models/Vehicle');

exports.addVehicle = async (req, res) => {
  try {
    const vehicle = new Vehicle(req.body);
    await vehicle.save();
    res.status(201).json(vehicle);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find().populate('driver');
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
