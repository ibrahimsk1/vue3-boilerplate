"use strict";

var webpack = require('webpack');
var dotenv = require('dotenv');

module.exports = {

  productionSourceMap: false,
  configureWebpack: {
    plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed)
    }) 
    ]
  },

  transpileDependencies: [
    'vuetify'
  ]
};
