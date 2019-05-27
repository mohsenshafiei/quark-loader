const path = require('path');

const context = path.resolve(__dirname, 'examples/css-example');
const loader = path.resolve(__dirname, 'src');

module.exports = {
  context,
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dev'),
    libraryTarget: 'umd',
    library: 'console-log'
  },
  resolveLoader: {
    alias: {
      'quark-loader': loader
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: 'quark-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
};
