const express = require("express");
const mongoose = require("mongoose");
const waitlistRoutes = require("./routes/waitlistRoutes");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Allow credentials (if needed)
    optionsSuccessStatus: 204,
  })
);
// Welcome Route
app.get("/", (req, res) => {
  res.send("Welcome to the Waitlist API!.");
});

// Routes
app.use("/api/waitlist", waitlistRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
