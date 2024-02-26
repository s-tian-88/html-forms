const { merge } = require('webpack-merge');
const Webpack = require('webpack');
const common = require('./webpack.common.config');

module.exports = merge(common, {

  mode: 'development',

  devtool: 'source-map',

  plugins: [
    new Webpack.ProgressPlugin(),
  ],

});
