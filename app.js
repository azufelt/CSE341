const http = require('http');

const express = require('express');

const routes = require('./routes');

const app = express();

app.use((req, res, next) => {
  console.log('in the middleware');
  next(); //allows the request to continue to the next middleware
});

app.use((req, res, next) => {
  console.log('in another middleware');
  res.send('<h1>hello!</h1>'); //send response
});

const server = http.createServer(app);

server.listen(3000);