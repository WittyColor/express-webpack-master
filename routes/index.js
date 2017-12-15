var express = require('express');
var router = express.Router();
var Tools = require('./../utils/tools'); // 判断浏览器版本
var Middleware = require('./../request/middlewares');

router.use(function (req,res,next) {
  console.log('now---->'+ Tools.getNowFormatDate(new Date()));
  console.log('req.url', req.url);
  console.log('req.host', req.host);

  res.cookie('why',{'name':'wuhanyuan'});

  var browser = Tools.browser(req)
  global.browser = browser;
  // res.locals.browser = browser; // 判断浏览器版本，模板调用
  next()
})


/* GET home page. */
router.get('/', Middleware.getIndexData, function(req, res, next) {
  res.render('index', {
    title: '小丸子啊',
    description:'这是汪满艳小丸子的个人网站',
    data:req.data
  });
});

module.exports = router;
