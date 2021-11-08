const express = require('express');
const route = express.Router();

const {index, show, store, update,destroy} = require('../controllers/todos');

route.get('/', index)
route.get('/:id', show)
route.post('/', store)
route.put('/:id', update)
route.delete('/:id', destroy)

module.exports = route
