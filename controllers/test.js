const db = require('../database/conection')
const HttpError = require('../utils/httpError');

const testFunction= (req,res)=>{
  return res.json('hello from test route and test controller')
}

module.exports = {
  testFunction
};
