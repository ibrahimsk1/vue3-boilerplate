"use strict";

var webpack = require('webpack');

var dotenv = require('dotenv');

module.exports = {
  configureWebpack: {
    output: {
      publicPath: '/static/'
    },
    plugins: [// ...
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed) // it will automatically pick up key values from .env file

    }) // ...
    ]
  }
};