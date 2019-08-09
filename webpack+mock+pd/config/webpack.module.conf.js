module.exports = {
    module: {
        rules: [
            // 处理es6语法
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            // 解析vue文件
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            // 解析vue文件
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            // 解析scss文件及语法
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    }
                ]
            },
            {
                test: /\.(png|gif|jpe?g)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000, // 小于8kb的图片转为base64，减少http请求
                            outputPath: 'static/images'
                        }
                    }
                ]
            },
            // 处理字体图标文件
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]'
                }
            }
        ]
    }
}