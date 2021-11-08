const express = require('express');
require('dotenv').config();
const logger = require('./middlewares/logger');

const userRoutes = require('./routes/userRoutes');
const todoRoutes = require('./routes/todoRoutes');

//create app
const app = express();
const port = process.env.PORT || PORT;
app.use(express.json());

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
// app.use(logger);

//ROUETS
app.get('/', (req, res) => {
  return res.json(['hello from nodejs server']);
});

app.use('/users', userRoutes);
app.use('/todos', todoRoutes);

// this is default in case of unmatched routes
app.use(function (req, res) {
  res.status(404).json({
    result: false,
    status: 404,
    message: 'Invalid Request',
  });
});

//run app
app.listen(port, () => console.log(`server run on port ${port}`));
