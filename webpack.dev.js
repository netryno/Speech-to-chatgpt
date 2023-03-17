const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack');
module.exports = {
  entry: './demo/index.js',
  output: {
    path: path.resolve(__dirname, './demo')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './demo/index.html'
    }),
    new Dotenv(),
  ]
}

