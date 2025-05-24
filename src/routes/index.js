const express = require('express');
const pessoasRoute = require('./pessoasRoute.js');

module.exports = (app) => {
  app.use(express.json(),pessoasRoute);
//   app.use('/pessoas', pessoasRoute);
}
