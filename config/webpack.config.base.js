const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UnicodePlugin = require('../src/plugins/unicode-plugin.js');

const APP_FILE = path.resolve(__dirname, '../src/index.js');
const APP_PATH = path.resolve(__dirname, '../dist');

module.exports = {
  entry: {
    app: APP_FILE,
  },
  output: {
    filename: '[name]_[hash:8].js',
    path: APP_PATH,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src'),
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: 4,
            },
          },
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer({
                  browsers: ['last 2 version', '>1%', 'ios 7'],
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true, //  使用模块化
              localIdentName: '[path][name]_[local]_[contenthash:8]',
            },
          },
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer()],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 5,
              name: '../images/[name].[hash].[ext]',
              publicPath: '../images/',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader?name=[hash].[ext]',
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: path.resolve(__dirname, '../src/static/svgs'),
        options: {
          symbolId: '[name]',
        },
      },
      {
        test: /locale\.js$/,
        use: [
          path.resolve(__dirname, '../src/loaders/unicode-loader.js'),
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        BASE_URL: JSON.stringify('http://localhost:8000'),
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css',
    }),
    new FriendlyErrorsWebpackPlugin(),
    new UnicodePlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '~': path.resolve(__dirname, '../src'),
      '~reducers': path.resolve(__dirname, '../src/reducers'),
      '~sagas': path.resolve(__dirname, '../src/sagas'),
      '~utils': path.resolve(__dirname, '../src/utils'),
      '~services': path.resolve(__dirname, '../src/services'),
      '~components': path.resolve(__dirname, '../src/components'),
      '~views': path.resolve(__dirname, '../src/views'),
      '~images': path.resolve(__dirname, '../src/static/images'),
    },
    modules: [
      'node_modules',
    ],
  },
  // stats: 'errors-only',
};
