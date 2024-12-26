const express = require("express");
const userRoutes = require("./routes/userRoutes"); 
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api", userRoutes); 

// Default route
app.get("/", (req, res) => res.send("Express API running on Vercel"));

// Export app for Vercel
module.exports = app;
