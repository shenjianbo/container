const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode: 'production',
    plugins: [
        // 清理dist文件
        new CleanWebpackPlugin(),
        // 配置html输出
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
}