const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const router = express.Router();
const userData = require('.user');
const router = express.Router()

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

router.get('/user', (req, res, next) => {
      const users = userData.users;
      res.render('shop', {
        prods: users,
        pageTitle: 'Home',
        path: '/',
        hasuser: users.length > 0,
        activeUser: true,
        userCSS: true
      });

      module.exports = router;