const express = require('express');
const { getUsers, getUserById, createUser, updateUser, updateUserScore, getLastUserId, deleteUser } = require('../controllers/userController');

const router = express.Router();

router.get('/users', getUsers); // Get all users
router.get('/users/:id', getUserById); // Get user by ID
router.get('/users/last', getLastUserId); // Get last user ID
router.post('/users', createUser); // Create new user
router.put('/users/:id', updateUser); // Update user by ID
router.put('/users/:id/score', updateUserScore);
router.delete('/users/:id', deleteUser); // Delete user by ID

module.exports = router;
