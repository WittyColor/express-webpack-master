var express = require('express');
var path = require('path');
var favicon = require('serve-favicon'); //处理收藏夹图标的
var logger = require('morgan'); //写日志
var cookieParser = require('cookie-parser'); //解析cookie，req.cookie属性存放着客户端提交过来的cookie，// req.cookie（key.value）向客户端写cookie
var bodyParser = require('body-parser');// 处理请求体的req.body 属性存放着请求体对象
// var redis = require('redis');

var index = require('./routes/index');
var users = require('./routes/users');
// var goods =

var app = express();
var config = require('./config');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public',express.static(path.join(__dirname, 'public')));

// var redisClient = redis.createClient(6379,config.options.host,{});
// //redis需要密码有底下两种写法
// redisClient.auth(config.options.pass,function () {
//   console.log('认证通过');
// })
// var redisClient = redis.createClient(6379,config.options.host,{auth_pass:config.options.pass});

//redis单个设值和取值
// redisClient.on('connect',function () {
//   redisClient.set('author','CherryToTco',redis.print);
//   redisClient.get('author',redis.print);
//   console.log('connect');
// })

//redis多个值的设置与获取
// redisClient.on('connect',function () {
//   redisClient.hmset('short',{'js':'javascript','C#':'C sharp'},redis.print);
//   redisClient.hmset('short','SQL','Structured Query Language','HTML','HyperText Mark-up Language',redis.print);
//
//   redisClient.hgetall('short',function(err,res){
//     if (err){
//       console.log('Error:'+err);
//       return;
//     }
//     console.dir(res);
//   })
// })

//redis打包执行多个命令
// redisClient.on('connect',function () {
//   var key = 'skill';
//   redisClient.sadd(key,'C#');
//   redisClient.sadd(key,'nodejs');
//   redisClient.sadd(key,'SQL');
//
//   redisClient.multi().sismember(key,'SQL')
//     .smembers(key)
//     .exec(function (err,results) {
//       console.log("MULTI got " + results.length + " replies");
//       results.forEach(function (reply, index) {
//         console.log("Reply " + index + ": " + reply.toString());
//       });
//       redisClient.quit();
//     })
// })
//
// redisClient.on('ready',function(err){
// 	console.log('ready:Redis链接成功');
// });
//
// redisClient.on('end',function (err) {
//   console.log('end');
// })

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
