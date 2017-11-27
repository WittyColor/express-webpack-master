var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'CherryToTco',
    description:'这是我的个人网站'
  });
});

module.exports = router;
