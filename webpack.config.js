var path = require('path');
//var node_modules = path.resolve(__dirname, 'node_modules');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/index.html'),
  filename: 'index.html',
  inject: 'body'
});

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ExtractTextPluginConfig = new ExtractTextPlugin("bundle.css");
module.exports = {
  entry: [path.resolve(__dirname, 'app/js/index.js')],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/i,
      include: path.resolve(__dirname, 'app'),
      loader: 'babel-loader'
    },
    {
      test: /\.scss$/i,
      include: path.resolve(__dirname, 'app/scss'),
      loader: ExtractTextPlugin.extract(['css-loader', 'resolve-url-loader', 'sass-loader'])
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      include: path.resolve(__dirname, 'app/images'),
      loader: 'file-loader?name=img/img-[hash:6].[ext]'
    },
    {
      test: /\.html$/i,
      loader: 'html-loader'
    }]
  },
  plugins: [HtmlWebpackPluginConfig, ExtractTextPluginConfig]
};
