const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'src/index.html'),
  filename: 'index.html',
  inject: 'body'
});

const config = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    path.resolve(__dirname, 'src/index')
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  context: path.resolve(__dirname, 'src'),
  devtool: 'cheap-module-inline-source-map',
  target: 'web',
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},
      {test: /\.css$/, use: ['style-loader', {loader: 'css-loader'}]},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, exclude: /node_modules/, use: ['file-loader']},
      {test: /\.(woff|woff2)$/, exclude: /node_modules/, use: {loader: 'url-loader', options: {limit: 5000}}},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, exclude: /node_modules/, use: {loader: 'url-loader', options: {limit: 10000, mimetype: 'application/octet-stream'}}},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: {loader: 'url-loader', options: {limit: 10000, mimetype: 'image/svg+xml'}}}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    HtmlWebpackPluginConfig
  ]
};

module.exports = config;
