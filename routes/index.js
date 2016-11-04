var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', apikey: process.env.GNAVI_API_KEY });
});

module.exports = router;
