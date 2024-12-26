const express = require("express");
const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Route utama
app.get("/", (req, res) => {
  res.send("Hello, Vercel! Your Express.js app is live!");
});

// Route tambahan
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API!", status: "success" });
});

// Menangani route yang tidak ditemukan
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Export module (Vercel membutuhkan ini)
module.exports = app;
