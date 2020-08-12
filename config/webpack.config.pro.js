const cssnano = require('cssnano');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const prodConfig = {
  mode: 'production',
  output: {
    publicPath: "./assets/"
  },
  plugins: [
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: path.resolve(__dirname, '../dist/index.html')
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
        },
        common: {
          name: "common",
          chunks: "all",
          minSize: 1,
          minChunks: 2
        },
      }
    },
  },
};

module.exports = merge(baseConfig, prodConfig);