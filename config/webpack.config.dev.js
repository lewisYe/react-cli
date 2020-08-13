const { merge } = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.config.base.js');

const devConfig = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
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
