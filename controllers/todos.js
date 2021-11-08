const db = require('../database/conection');
const HttpError = require('../utils/httpError');

const index = async (req, res, next) => {
  try {
    let todos = await db('todos')
    .join('users', 'todos.u_id', 'users.u_id')
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

const show = async (req, res)=>{
  id  = req.params.id
  const todo = await db('todos')
  .join('users','todos.u_id','users.u_id')
  .where('t_id' , id)

  if(!todo.length){
    return res.status(200).json({
      "result":false,
      "message":"Object not found",
      "status":404,
      "data":todo
    });
  }
  return res.status(200).json(todo[0]);
}

const store = (req,res)=>{
  console.log(req.body);

}

const update = (req,res)=>{

}

const destroy = (req,res)=>{

}



module.exports = {
  index,
  show,
  store,
  destroy,
  update
};
