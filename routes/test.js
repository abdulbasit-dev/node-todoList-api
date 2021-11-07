const express = require('express');
const route = express.Router();

route.get('/', (req,res)=>{
  return res.json('hello from test routes')
})

module.exports = route
