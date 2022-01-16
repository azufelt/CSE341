const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const userRoutes = require('./routes/user');
const homeRoutes = require('./routes/index');

//parse incoming request --will parse forms
app.use(bodyParser.urlencoded({
  extended: false
}));
//static path to public folder for CSS, JS, images
app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);
app.use('/admin', userRoutes);
// '/' is ALWAYS the default
app.use(homeRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);