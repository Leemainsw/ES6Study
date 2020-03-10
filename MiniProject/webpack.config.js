var path = require('path');
var glob = require('glob');

module.exports = {
    entry: "./src/index.js",
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            },
            {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            include: path.resolve(__dirname, 'src'),
            use:{
                loader : 'babel-loader',
                options: {presets:['env']}
            }
        }]
    }
}