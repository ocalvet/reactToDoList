var path = require('path');
var webpack = require('webpack');

// Webpack configuration object
module.exports = {
  devtool: 'eval-source-map',
  entry: {
    app: [
      './app/app.jsx'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'app'),
        loader: 'babel'
      }
    ]
  }
}