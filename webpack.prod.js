const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack');
module.exports = {
  devtool: '#source-map',
  entry: {
    main: './demo/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vue-audio-recorder.min.js',
    library: 'VueAudioRecorder',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './demo/index.html'
    }),    
    new webpack.LoaderOptionsPlugin({
      minimize: false
    }),
    new Dotenv(),
  ]
}
