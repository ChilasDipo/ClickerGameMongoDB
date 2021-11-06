var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/javascript.js', function(req, res, next) {
  res.sendFile('javascript.js', { root: 'views/' })
  //res.render('index', { title: 'Cocktails' });
});

module.exports = router;
