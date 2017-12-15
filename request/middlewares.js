const fs = require('fs');
const path = require('path');

exports.getIndexData = function (req,res,next) {
  var dataPath = path.resolve(__dirname,'../Json','index.json');
  fs.readFile(dataPath,function (err,data) {
    const json = JSON.parse(data.toString());
    req.data = json;
    next();
  })
}