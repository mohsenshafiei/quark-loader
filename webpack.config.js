const path = require('path');

const context = path.resolve(__dirname, 'src');

module.exports = {
  context,
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'console-log'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
};
