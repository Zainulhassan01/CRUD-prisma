const express = require('express')
const {getAllUsers, addUser, updateUser, deleteUser} = require('../controllers/users.controller');

const userRoutes = express.Router();

userRoutes.get('/', (req, res) => getAllUsers(req, res))
userRoutes.post('/', (req, res) => addUser(req, res))
userRoutes.post('/:id', (req, res) => updateUser(req, res))
userRoutes.delete('/:id', (req, res) => deleteUser(req, res))

module.exports = userRoutes;

