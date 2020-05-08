/*
 * @Author: JS-Drama
 * @Date: 2020-05-07 16:45:18
 * @LastEditTime: 2020-05-08 10:06:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pj-h5-webd:\myCode\webpackLearn\webpack.common.js
 */
const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(), // 官方文档继续挖坑
        new HtmlWebpackPlugin({
            title: '缓存'
        })
    ],
    output: {
        filename: '[name].[contenthash].js', // [contenthash] 生成hash
        chunkFilename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
};