const express = require('express');
const route = express.Router();

const {getUsers} = require('../controllers/users');

route.get('/', getUsers)

module.exports = route
