var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

let resolve =
  dir => path.join(__dirname, dir)

var config = {
  context: resolve('/src'), // `__dirname` is root of project and `src` is source
  entry: {
    app: './app.js'
  },
  output: {
    path: resolve('/dist'), // `dist` is the destination
    filename: '[name].bundle.js'
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  module: {
    loaders: [
      {
        test: /\.sol$/,
        loader: 'truffle-solidity-loader?migrations_directory=./migrations'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        query: {
          presets: ['env']
        }
      },
      {
        test: /\.scss$/,
        use: [{ loader: 'style-loader' },
              { loader: 'css-loader' },
              { loader: 'sass-loader' }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('/src/index.html')
    })
  ],
  node: {
    fs: 'empty',
    child_process: 'empty'
  }
}

module.exports = config