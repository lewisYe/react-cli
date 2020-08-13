const cssnano = require('cssnano');
const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const baseConfig = require('./webpack.config.base');

const prodConfig = {
  mode: 'production',
  output: {
    publicPath: './assets/',
  },
  plugins: [
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: path.resolve(__dirname, '../dist/index.html'),
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
        common: {
          name: 'common',
          chunks: 'all',
          minSize: 1,
          minChunks: 2,
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        exclude: /\.min\.js$/,
        cache: true,
        parallel: 4,
      }),
    ],
  },
};

module.exports = merge(baseConfig, prodConfig);
