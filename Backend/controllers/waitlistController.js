const Waitlist = require("../models/waitlist");

exports.addWaitlistEntry = async (req, res) => {
  try {
    const { restaurantName, email, location } = req.body;
    const newEntry = new Waitlist({ restaurantName, email, location });
    await newEntry.save();
    res.status(201).json({ message: "Waitlist entry added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error adding entry to the waitlist" });
  }
};
