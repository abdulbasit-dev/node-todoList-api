const db = require('../database/conection');
const HttpError = require('../utils/httpError');

const index = async (req, res, next) => {
  try {
    let todos = await db('todos')
      .join('users', 'todos.u_id', 'users.u_id')
      .select();

    return res.status(200).json({
      result: true,
      message: 'all todos',
      status: 200,
      total: todos.length,
      data: todos,
    });
  } catch (err) {
    return next(new HttpError(err, 404));
  }
};

const show = async (req, res) => {
  id = req.params.id;
  const todo = await db('todos')
    .join('users', 'todos.u_id', 'users.u_id')
    .where('t_id', id);

  if (!todo.length) {
    return res.status(404).json({
      result: false,
      message: 'Object not found',
      status: 404,
      data: todo,
    });
  }
  return res.status(200).json(todo[0]);
};

const store = async (req, res) => {
  try {
     await db('todos').insert({
      title: req.body.title,
      u_id: req.body.user_id,
    });

    return res.status(201).json({
      result: true,
      message: 'todo added',
      status: 201,
    });
  
  } catch (err) {
    console.log(err);
  }
};

const update = async (req, res) => {
  try {
    await db('todos').update({
     title: req.body.title,
   })
   .where('t_id',req.params.id);

   return res.status(200).json({
     result: true,
     message: 'todo updated',
     status: 200,
   });
 
 } catch (err) {
   console.log(err);
 }
};

const destroy = async (req, res) => {
  try {
    await db('todos').where('t_id',req.params.id).del();

   return res.status(200).json({
     result: true,
     message: 'todo deleted',
     status: 200,
   });
 
 } catch (err) {
   console.log(err);
 }
};



module.exports = {
  index,
  show,
  store,
  destroy,
  update,
};
