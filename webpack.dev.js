/*
 * @Author: JS-Drama
 * @Date: 2020-05-07 16:46:32
 * @LastEditTime: 2020-05-07 16:55:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pj-h5-webd:\myCode\webpackLearn\webpack.dev.js
 */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
});