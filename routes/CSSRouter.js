var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/css.css', function(req, res, next) {
  res.sendFile('css.css', { root: 'views/' })
  //res.render('index', { title: 'Cocktails' });
});

module.exports = router;
