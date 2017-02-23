const path = require('path');
module.exports = {
    entry: {
        app: ['./src/main.js']
    },
    output: {
        // 路径是从根目录到根目录下的dist，相当于cd进入
        path: path.resolve(__dirname, '../dist'),
        // 静态资源存放目录，可以直接在这里取文件
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader',
                    'autoprefixer-loader', 'sass-loader'
                ] //2.0不支持缩写
            }, {
                test: /\.(png|jqg)$/,
                loader: 'url-loader?limit=100000'
            }, {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    devtool: 'source-map'
}