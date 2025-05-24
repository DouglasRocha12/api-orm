const express = require('express');
const pessoasRoute = require('./pessoasRoute.js');
const cursoRoute = require('./cursoRoute.js');
const categoriaRoute = require('./categoriaRoute.js');

module.exports = (app) => {
  app.use(express.json(),pessoasRoute,cursoRoute,categoriaRoute);
//   app.use('/pessoas', pessoasRoute);
}
