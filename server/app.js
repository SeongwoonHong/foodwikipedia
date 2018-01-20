const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/api', require('./routes'));

app.listen(4000, () => {
  console.log('Express is running on port 4000');
});
