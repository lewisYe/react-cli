const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./config/webpack.config.dev.js');
const options = {
  contentBase:'./dist',
  hot:true,
  host:'0.0.0.0',
  historyApiFallback: true
}

webpackDevServer.addDevServerEntrypoints(config,options);
const complier = webpack(config);
const server = new webpackDevServer(complier, options);

server.listen(8000, '0.0.0.0', ()=> {
  console.log('dev server listening on port 8000')
})