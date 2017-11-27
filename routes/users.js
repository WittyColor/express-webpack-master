var express = require('express');
var router = express.Router();
var handler = require('./../handlers/user.handlers');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/MyDetail', handler.get_user_detail);

module.exports = router;
