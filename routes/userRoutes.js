const express = require('express');
const route = express.Router();

const {getUsers, userTodos} = require('../controllers/userController');

route.get('/', getUsers)

module.exports = route
