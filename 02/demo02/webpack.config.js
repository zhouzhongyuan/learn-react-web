var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, '');

var config = {
    resolve: {
        alias: {
            'react-native': './react-native-web',
        },
    },
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'index.js'
    },
    module : {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel'
            }
        ]
    }
};

module.exports = config;