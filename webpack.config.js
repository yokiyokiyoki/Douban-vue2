module.exports = {
    entry: {
        app: ['./main']
    },
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel?presets[]=es2015'],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loaders: ['style', 'css']
        }]
    }
}