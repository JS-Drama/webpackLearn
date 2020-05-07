/*
 * @Author: JS-Drama
 * @Date: 2020-05-07 15:04:10
 * @LastEditTime: 2020-05-07 16:41:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pj-h5-webd:\myCode\webpackLearn\webpack.config.js
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin'); // 官网有问题
const webpack = require('webpack');

module.exports = {
    mode: 'development', // 开发环境
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map', // 在打包前文件内定位错误
    devServer: {
        contentBase: './dist', // 指定服务根目录
        hot: true // 开启HRM
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '模块热替换'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    mode: "production" // 开启打包压缩
};