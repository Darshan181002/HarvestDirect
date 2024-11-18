// waitlistController.js
const Waitlist = require("../models/Waitlist");

exports.addWaitlistEntry = async (req, res) => {
  try {
    console.log("Received data:", req.body); // Log received request data
    const { restaurantName, email, number, location } = req.body;

    // Ensure required fields are present
    if (!restaurantName || !email || !number) {
      return res
        .status(400)
        .json({ error: "restaurantName email and number are required" });
    }

    const newEntry = new Waitlist({ restaurantName, email, number, location });
    await newEntry.save();
    res.status(201).json({ message: "Waitlist entry added successfully" });
  } catch (error) {
    console.error("Error adding entry:", error); // Log the full error
    res.status(500).json({ error: "Error adding entry to the waitlist" });
  }
};
