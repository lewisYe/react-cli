const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const HappyPack = require('happypack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

const APP_FILE = path.resolve(__dirname, '../src/index.js')
const APP_PATH = path.resolve(__dirname, '../dist')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8000',
      'webpack/hot/only-dev-server',
      APP_FILE
    ]
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: APP_PATH,
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'happypack/loader?id=js'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')()]
            }
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')()]
            }
          },
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'url-loader?limit=8192&name=images/[name].[hash].[ext]'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader?name=[hash].[ext]'
      },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader",
        include: path.resolve(__dirname, "../src/static/svgs"), //只处理指定svg的文件(所有使用的svg文件放到该文件夹下)
        options: {
          symbolId: "[name]"
        }
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        BASE_URL: JSON.stringify(`http://localhost:8000`)
      }
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:8000' }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new HappyPack({
      id: 'js',
      threads: 4,
      loaders: ['babel-loader']
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.css'], //后缀名自动补全
    alias: {
      "~": path.resolve(__dirname, '../src'),
      "~reducers": path.resolve(__dirname, '../src/reducers'),
      "~sagas": path.resolve(__dirname, '../src/sagas'),
      "~utils": path.resolve(__dirname, '../src/utils'),
      "~services": path.resolve(__dirname, '../src/services'),
      "~components": path.resolve(__dirname, '../src/components'),
      "~views": path.resolve(__dirname, '../src/views'),
      "~images": path.resolve(__dirname, '../src/static/images'),
    },
    modules: [
      'node_modules',
    ]
  },
}