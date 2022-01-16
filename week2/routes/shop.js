const path = require('path');
//add path function from Node, allows path.join  to use dirname take arguements of directories instead of file paths with / 
//path.join automatically detects tthe computer it's running on and consructs a path to our local directory. 

const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;