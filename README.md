![GitHub Logo](/public/assets/quark-loader-starfont.png)

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![size][size]][size-url]

##### Loader for `Webpack` to process `CSS` files to minify and compress as much as possible.

##### Getting Started

To begin you'll need to install `quark-loader`

```console
npm install --save-dev quark-loader
```
Then add the plugin to your webpack config. For example:

**file.js**
```js
import css from 'file.css';
```

**webpack.config.js**
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
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
        ],
      },
    ],
  },
};
```

##### Tutorials

[Using Quark-Loader to minimize css files](https://medium.com)


[npm]: https://img.shields.io/npm/v/css-loader.svg
[npm-url]: https://npmjs.com/package/css-loader
[node]: https://img.shields.io/node/v/css-loader.svg
[node-url]: https://nodejs.org
[size]: https://packagephobia.now.sh/badge?p=css-loader
[size-url]: https://packagephobia.now.sh/result?p=css-loader
