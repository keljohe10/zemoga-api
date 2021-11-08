const bodyparser = require('body-parser');
const express = require('express');
const routes = require('./routes');
const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'PUT, PATCH, POST, GET, DELETE, OPTIONS');
  next();
});

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//routes
app.use('/', routes);

//Errors middleware
app.use((error, req, res, next) => {
  logger.error(
    JSON.stringify({
      method: req.method,
      url: req.url,
      error: {
        message: error.message,
        stack: error.stack,
      },
      params: req.params,
      headers: req.headers,
      querys: req.query,
    })
  );
  try {
    return res.status(500).send({ errors: error.message });
  } catch (error) {
    return next(error);
  }
});

module.exports = app;
