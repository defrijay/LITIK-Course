const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.getConnection()
  .then((conn) => {
    console.log("Connected successfully");
    conn.release(); // Release the connection back to the pool
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
  });

module.exports = pool;
