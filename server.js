var webpack = require('webpack');
var WebPackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var port = process.env.REACT_TODO_PORT || 8000;

new WebPackDevServer(webpack(config), {
    historyApiFallback: true,
    colors: true,
    progress: true
}).listen(port);