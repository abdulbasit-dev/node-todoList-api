const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const logger = require('./middlewares/logger');

const testRoutes = require('./routes/test');

//create app
const app = express();
const port = process.env.PORT || PORT
app.use(bodyParser.json())

// COSR handler
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

//Middllewares
app.use(logger);

//ROUETS
app.get('/',(req,res)=>{
  return res.json(["hello from nodejs server"])
})

app.use('/test',testRoutes)

app.listen(port, ()=>console.log(`server run on port ${port}`))
