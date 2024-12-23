const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

// Menggunakan dotenv untuk memuat variabel lingkungan
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Konfigurasi koneksi MySQL menggunakan variabel lingkungan
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ', err);
        return;
    }
    console.log('Connected to MySQL');
});

// User Routes
app.use('/api', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
