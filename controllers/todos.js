const db = require('../database/conection');
const HttpError = require('../utils/httpError');

const getTodos = async (req, res, next) => {
  try {
    let todos = await db('todos')
    .join('users', 'todos.u_id', 'users.u_id')
    .where('t_id',1)
    .select()

    return res.status(200).json({
      "result":true,
      "message":"all todos",
      "status":200,
      "total":todos.length,
      "data":todos
    });
  } catch (err) {
    return next(new HttpError(err, 404));
  }
};

module.exports = {
  getTodos
};
