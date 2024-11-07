const express = require("express");
const { addWaitlistEntry } = require("../controllers/waitlistController");

const router = express.Router();

// POST /api/waitlist
router.post("/", addWaitlistEntry);

module.exports = router;
