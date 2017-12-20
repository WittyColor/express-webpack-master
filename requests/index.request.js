var config = require('../config.js');
var utils = require('./../utils/axios.js');
var api = require('./../utils/Api/index_api.js');

const base = config.apiHost;

exports.get_goods_list = function (req,res,next) {
  var bizParam = {
    storeId:'10049',
    productStatus:'4',
    pageNum:'1',
    pageSize:'2'
  };
  // var url = 'http://shop.dmp.hzjiehun.bid/product/list?storeId=10049&productStatus=4&pageNum=1&pageSize=2';
  utils.ajax('GET', api.productList, bizParam, function (data) {
      req.data = data;
      next();
  })
}