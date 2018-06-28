const path = require('path')
const webpack = require("webpack");
const env = process.env.NODE_ENV || 'dev';

let config = {
    entry: {
        'javascript-api-client': './src/index.js',
    },
    output: {
        path: path.resolve('./dist/'),
        filename: '[name].js'
    },
    module: {
      rules: [
        {
          parser: {
            amd: false
          }
        },
        {
            test: /\.js$/,
            use: ['babel-loader']
        }
      ]
    }
}

module.exports = config;