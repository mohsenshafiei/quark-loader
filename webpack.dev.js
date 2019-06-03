const path = require('path');

const context = path.resolve(__dirname, 'examples/sass-example');
const loader = path.resolve(__dirname, 'src');

module.exports = {
  context,
  entry: './index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'console-log',
  },
  resolveLoader: {
    alias: {
      'quark-loader': loader,
    },
  },
  node: {
    fs: 'empty',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[hash:base64:3]',
              importLoaders: 3,
            },
          },
          {
            loader: 'quark-loader',
            options: {
              compress: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
