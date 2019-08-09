const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    // 配置插件
    plugins: [
        // 使用vue解析插件
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html'
        })
    ],
    devServer: {
        // ip
        host: 'localhost',
        // 端口
        port: '8080',
        // 自动打开浏览器
        open: true,
        // 开启热更新
        hot: true
    }
}