const db = require('../database/conection')

const testFunction= (req,res)=>{
  return res.json('hello from test route and test controller')
}

module.exports = {
  testFunction
};
