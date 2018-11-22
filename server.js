const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./config/webpack.config.dev.js');
const options = {
  contentBase:'./dist',
  hot:true,
  host:'localhost'
}

webpackDevServer.addDevServerEntrypoints(config,options);
const complier = webpack(config);
const server = new webpackDevServer(complier, options);

server.listen(8000, 'localhost', ()=> {
  console.log('dev server listening on port 8000')
})