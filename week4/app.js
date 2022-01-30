const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const PORT = process.env.PORT || 5000;

const cors = require('cors'); // Place this with other requires (like 'path' and 'express')

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const corsOptions = {
  origin: "https://backendnodeproject.herokuapp.com/",
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const options = {
  family: 4
};

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://azufelt:manager01@cluster0.ctdx0.mongodb.net/BackendNodeProject?retryWrites=true&w=majority";

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  //max's ID: '61f48c89414b826412e8c715'
  User.findById('61f5fd73a22f3b8e0f556ac9')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    MONGODB_URL, options)
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Ashley',
          email: 'ashley.zufelt@gmail.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });