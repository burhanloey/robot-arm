const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['./resources/public/js'])
    ],
    output: {
        filename: 'bundle.js',
        publicPath: '/js/',
        path: path.resolve(__dirname, 'resources/public/js')
    }
};
