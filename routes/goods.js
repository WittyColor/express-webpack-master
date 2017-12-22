var express = require('express');
var router = express.Router();

router.get('/list',function(req,res,next){
  res.render('goods/list',{
    title:'商品列表',
    description:'这里是商品列表'
  })
})

module.exports = router;