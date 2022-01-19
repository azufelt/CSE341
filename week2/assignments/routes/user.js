 const path = require('path');
 const express = require('express');
 const rootDir = require('../util/path');
 const router = express.Router();

 const users = [];

 router.get('/user', (req, res, next) => {
       res.render('add-product', {
         pageTitle: 'Add User',
         path: '/admin/add-user',
         formsCSS: true,
         activeUser: true,
         userCSS: true

       });

       router.post('/user', (req, res, next) => {
         console.log(req.body);
         res.redirect('/');
       });

       module.exports = router;