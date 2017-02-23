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
        // 加载各种js，img文件资源
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
    // 启用位置信息调试
    devtool: 'source-map',
    // 配置别名
    resolve: {
        alias: {
            'src': path.resolve(__dirname, '../src'),
            'components': path.resolve(__dirname, '../src/components'),
            'img': path.resolve(__dirname, '../src/assets/img/'),

        }
    }
}