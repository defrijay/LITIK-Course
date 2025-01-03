const db = require('../db');  // Make sure your DB connection is properly set up

// Get all users
const getUsers = async (req, res) => {
  try {
    const [results] = await db.query('SELECT * FROM users');
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await db.query('SELECT id FROM users ORDER BY id DESC LIMIT 1');
    // console.log(results); // Debugging untuk melihat hasil query
    if (results.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json({ id: results[0].id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new user
const createUser = async (req, res) => {
  const { nama, kelas } = req.body;
  try {
    const [results] = await db.query('INSERT INTO users (nama, kelas) VALUES (?, ?)', [nama, kelas]);
    res.status(201).json({ message: 'User created successfully', id: results.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update user by ID
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { nama, kelas } = req.body;
  try {
    const [results] = await db.query('UPDATE users SET nama = ?, kelas = ? WHERE id = ?', [nama, kelas, id]);
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: 'User updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update user score by ID
const updateUserScore = async (req, res) => {
  const { id } = req.params;
  const { skor } = req.body;

  if (typeof skor !== 'number' || skor < 0) {
    return res.status(400).json({ message: "Invalid score value" });
  }

  try {
    const [results] = await db.query('UPDATE users SET skor = ? WHERE id = ?', [skor, id]);
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: 'Score updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get the last user ID
const getLastUserId = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await db.query('SELECT id FROM users ORDER BY id DESC LIMIT 1');
    // console.log(results); // Debugging untuk melihat hasil query
    if (results.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json({ id: results[0].id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Delete user by ID
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await db.query('DELETE FROM users WHERE id = ?', [id]);
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getUsers, getUserById, createUser, updateUser, updateUserScore, deleteUser, getLastUserId };
