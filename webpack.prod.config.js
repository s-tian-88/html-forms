const { merge } = require('webpack-merge');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CSSMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const common = require('./webpack.common.config');

module.exports = merge(common, {

  mode: 'production',

  devServer: {
    port: 9000,
  },

  optimization: {
    minimizer: [
      new TerserWebpackPlugin({}),
      new CSSMinimizerWebpackPlugin({}),
    ],
  },

});
