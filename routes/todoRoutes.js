const express = require('express');
const route = express.Router();

const {index, show, store, update, destroy , userTodos} = require('../controllers/userTodoController');

route.get('/', index)
route.get('/todos-of-user/:user_id', userTodos)
route.get('/:todo_id', show)
route.post('/', store)
route.put('/:todo_id', update)
route.delete('/:todo_id', destroy)

module.exports = route
