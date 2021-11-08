const express = require('express');
const route = express.Router();

const {getTodos} = require('../controllers/todos');

route.get('/', getTodos)

module.exports = route
