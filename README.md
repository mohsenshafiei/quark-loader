![GitHub Logo](/public/assets/quark-loader-starfont.png)

[![version][version]][version-url]
[![node][node]][node-url]
[![travis][travis]][travis-url]
[![downloads][downloads]][downloads-url]
[![MIT LICENSE][mit]][mit-url]
[![semantic-release][semantic-release]][semantic-release-url]


##### Loader for `Webpack` to process `CSS` files to minify and compress as much as possible.

#### Getting Started

To begin you'll need to install `quark-loader`

```console
npm install --save-dev quark-loader
```

<h2 align="center">Examples</h2>

Add the plugin to your webpack config.

**file.js**
```js
import file from 'file.js';
```
Chain the `quark-loader` with [css-loader](https://github.com/webpack-contrib/css-loader) and the [style-loader](https://github.com/webpack-contrib/style-loader) to immediately minimize and apply all styles to the DOM.

**webpack.config.js**
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
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

You can also use the `quark-loader` with [sass-loader](https://github.com/webpack-contrib/sass-loader). For example

```js
module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
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
    ],
  },
```

#### How it works

`quark-loader` process the `CSS` files and replaced our style with a reference to our declarations. In this way, we can remove repetitive styles from our CSS and make it minimum.

![What actually happens?](/public/assets/process.png)

**style.css**
```css
.a {
  top: 100px;
}
.b {
  top: 100px;
}
.c {
  top: 100px;
}
.d {
  top: 100px;
}
```
**Let's review what we get at the end**

Extracted css file
```CSS
.t7E {
	top: 100px;
}
.BOO {
}
._1dA {
}
._1rC {
}
._3e1 {
}
```
Without `CSS` extraction
```js
exports.locals = {
	"top--100px": "t7E",
	"a": "BOO t7E",
	"b": "_1dA t7E",
	"c": "_1rC t7E",
	"d": "_3e1 t7E"
};
```
#### Tutorials

[Using Quark-Loader to minimize css files](https://medium.com)

[node]: https://img.shields.io/node/v/css-loader.svg
[node-url]: https://nodejs.org
[travis]: https://travis-ci.com/mohsenshafiei/quark-loader.svg?branch=master
[travis-url]: https://travis-ci.com/mohsenshafiei/quark-loader.svg?branch=master
[version]: https://img.shields.io/npm/v/quark-loader.svg?style=flat-square
[version-url]: http://npm.im/quark-loader
[downloads]: https://img.shields.io/npm/dm/quark-loader.svg?style=flat-square
[downloads-url]: http://npm-stat.com/charts.html?package=quark-loader&from=2015-08-01
[mit]: https://img.shields.io/npm/l/quark-loader.svg?style=flat-square
[mit-url]: http://opensource.org/licenses/MIT
[semantic-release]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[semantic-release-url]: https://github.com/semantic-release/semantic-release
