const http = require('http');

const express = required('express');

const routes = require('./routes');

const app = express();
app.use((req, res, next) => (
  console.log('in the top') next();
));

app.use((req, res, next) => (
  console.log('in another middleware nodemon')
));

const server = http.createServer(app);

server.listen(3000);