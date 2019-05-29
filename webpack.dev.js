const path = require('path');

const context = path.resolve(__dirname, 'examples/css-example');
const loader = path.resolve(__dirname, 'src');

module.exports = {
  context,
  entry: './index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
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
