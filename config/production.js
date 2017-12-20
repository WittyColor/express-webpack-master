/*
*   生产环境的配置
*/

var config = {
  apiHost: 'http://shop.dmp.hzjiehun.bid',
  storeId: '10069',
  appUrl: '//hz.jiabasha.com',
  uid: '929168643671982080',
  userName: '159****9257',
  userAvatar: 'http://9gz846cx.gic.bgp.cnbj01.cdsgss.com/rest/935475550825218048.jpg',
  storeType:'1',
  staticDmpSeller: '//static.dmpseller.hzjiehun.bid',
  ident1:'http://ikz2ydxo.gic.bgp.cnbj01.cdsgss.com/rest/926374646008250368ident1.png',//参考示例身份证正面
  ident2:'http://ikz2ydxo.gic.bgp.cnbj01.cdsgss.com/rest/926374521714245632ident2.png',//参考示例身份证反面
  customsDeclaration:'http://9gz846cx.gic.bgp.cnbj01.cdsgss.com/rest/928101959427162112.png',//参考示例海关报关单

  options:{
    host:"1ac256e68d824785.m.cnsza.kvstore.aliyuncs.com",
    // "host":"127.0.0.1",
    pass:'1ac256e68d824785:HansRedis666666',
    auth:'1ac256e68d824785:HansRedis666666',
    port: "6379",
    db:31,
    ttl: 60 * 60 * 24 * 1   //Session的有效期为1天
  }
}

module.exports = config;