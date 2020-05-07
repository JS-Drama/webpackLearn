/*
 * @Author: JS-Drama
 * @Date: 2020-05-07 16:46:53
 * @LastEditTime: 2020-05-07 17:53:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pj-h5-webd:\myCode\webpackLearn\webpack.prod.js
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // 莫名其妙的坑 重新执行npm i 重新cnpm install webpack webpack-cli --save-dev 重新cnpm install uglifyjs-webpack-plugin --save-dev
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});