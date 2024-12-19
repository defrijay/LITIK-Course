const db = require('../db');

// Get all users
const getUsers = (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

// Get user by ID
const getUserById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results[0]);
    });
};

// Create a new user
const createUser = (req, res) => {
    const { nama, kelas } = req.body;
    const query = 'INSERT INTO users (nama, kelas) VALUES (?, ?)';
    db.query(query, [nama, kelas], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'User created successfully', id: results.insertId });
    });
};

// Update user by ID
const updateUser = (req, res) => {
    const { id } = req.params;
    const { nama, kelas } = req.body;
    const query = 'UPDATE users SET nama = ?, kelas = ? WHERE id = ?';
    db.query(query, [nama, kelas, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'User updated successfully' });
    });
};

// Delete user by ID
const deleteUser = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    });
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
