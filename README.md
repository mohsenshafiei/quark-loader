![GitHub Logo](/public/assets/quark-loader-starfont.png)

[![npm][npm]][npm-url]
[![node][node]][node-url]

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

chain the

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
**Final Result**
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

#### Tutorials

[Using Quark-Loader to minimize css files](https://medium.com)


[npm]: https://img.shields.io/npm/v/css-loader.svg
[npm-url]: https://npmjs.com/package/css-loader
[node]: https://img.shields.io/node/v/css-loader.svg
[node-url]: https://nodejs.org
