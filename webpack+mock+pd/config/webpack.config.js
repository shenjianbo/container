const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const productionConfig = require('./webpack.prod.conf.js');
const developmentConfig = require('./webpack.dev.conf.js');
const moduleConfig = require('./webpack.module.conf.js');

let defaultConfig = {
    // 配置入口
    entry: {
        app: './src/main.js'
    },
    // 配置出口
    output: {
        // 出口路径
        path: path.join(__dirname, '../', 'dist'),
        // 输出文件命名
        filename: '[name].[hash:6].js'
    }
}

module.exports = env => {
    let config = env === 'production' ? productionConfig : developmentConfig;
    return merge(defaultConfig, moduleConfig, config);
}