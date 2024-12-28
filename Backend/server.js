require('dotenv').config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");

const app = express();

// Middleware CORS
app.use(cors({
  origin: process.env.CLIENT_URL || "https://litik-course.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

// Middleware lainnya
app.use(bodyParser.json());

// Routes
app.use("/api", userRoutes);

// Default handler for /api
app.get("/api", (req, res) => {
  res.send("Welcome to the API endpoint");
});

// Default route
app.get("/", (req, res) => res.send("Express API running on Vercel"));

// Handler kesalahan global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Export app for Vercel
module.exports = app;
