'use strict'

var path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'js', 'app.js'),
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      // CSS:
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      // Babel:
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015']
        }
      },
      // React:
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query:
        {
          presets: ['react']
        }
      }
    ]
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  devtool: 'source-map'
}
