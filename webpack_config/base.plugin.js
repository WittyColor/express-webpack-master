
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path')
//html页面 pagesArray
// const pagesArray = require('./htmlPages');
const output = require('../output');
const base_plugin = [
    // new UglifyJSPlugin({
    //     uglifyOptions: {
    //         wranings: false,
    //         sourceMap: true,
    //         output: {
    //             comments: false,
    //             beautify: false
    //         },
    //     }
    // }),
    new ExtractTextPlugin({
         filename: 'css/[name].min.css'
    }),
    new CopyWebpackPlugin([{
        from: path.join(__dirname, '../static'),
        to: path.join(__dirname, '../public/static'),
        force: true
    }]),
    new webpack.HotModuleReplacementPlugin()
]
/*遍历页面，添加配置*/
output.htmlsPluginStr().forEach((page)=>{
    const htmlPlugin = new HtmlWebpackPlugin({
        template: page.filepath,
        jade: page.filepath,
        filename: `${page.template}/${page.fileleft}.html`,
        chunks: ['vendors', page.chuckName],
        minify: false,
        inject: 'body'
    });

    base_plugin.push(htmlPlugin)
})

module.exports = base_plugin;