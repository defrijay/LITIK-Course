const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");

const app = express();

// Middleware CORS
app.use(cors({
  origin: "https://litik-course.vercel.app", // Origin frontend yang diizinkan
  methods: ["GET", "POST", "PUT", "DELETE"], // HTTP methods yang diizinkan
  credentials: true, // Jika menggunakan cookie atau header otentikasi
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

// Export app for Vercel
module.exports = app;
