const { merge } = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base.js');

const devConfig = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    contentBase: './dist',
    port: 8000,
    hot: true,
    stats: 'errors-only',
    historyApiFallback: true,
    open: true,
  },
  devtool: 'cheap-source-map',
};

module.exports = merge(baseConfig, devConfig);
