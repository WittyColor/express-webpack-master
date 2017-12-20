/**
 * 生成配置文件
 */
const fs = require('fs');
const path = require('path');
output = {
    entryStr: function () {
        let entry_files = {};
        function each_entry_file(dir) {
            try {
                fs.readdirSync(dir).forEach(function (file) {
                    let file_path = dir + '/' + file;
                    fs.readdirSync(file_path).forEach(function (jsfile) {
                        let name = path.basename(jsfile, '.js');
                        let fname = `${file}/${name}`
                        let jsfile_path = file_path + '/' + jsfile;
                        entry_files[fname] = jsfile_path;
                    })
                })
            } catch (e) {

            }
        }
        each_entry_file('./client/js');
        return entry_files;
    },
    htmlsPluginStr: function () {
        let pagesArray = [];
        function each_file(dir) {
            try {
                fs.readdirSync(dir).forEach(function (file) {
                    let file_obj = {};
                    if (file.indexOf('jade') < 0 && file.indexOf('includes') < 0) {
                        let file_path = dir + '/' + file;
                        fs.readdirSync(file_path).forEach(function (jade) {
                            let chunk_name = path.basename(jade, '.html');
                            let jade_path = file_path + '/' + jade;
                            file_obj['filepath'] = jade_path;
                            file_obj['fileleft'] = jade.split('.')[0];
                            file_obj['template'] = file_path;
                            file_obj['chuckName'] = chunk_name;
                            pagesArray.push(file_obj)
                        })
                    }
                })
            } catch (e) {

            }
        }
        each_file('./views');
        return pagesArray
    }
}
module.exports = output;