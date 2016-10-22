var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [

    ],

    devServer: {
        colors: true,
        historyApiFallback: true,
        inline: false,
        port: 3000
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            query: {
                "presets": ["es2015"],
            },
            include: path.join(__dirname, 'src')
        }]
    }
};