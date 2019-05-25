# QUARK-LOADER

##### Loader for `webpack` to process `CSS/SCSS/SASS/LESS` files to minimize and compress as much as possible.

##### Getting Started

To begin you'll need to install `quark-loader`

```bash
npm install --save-dev quark-loader
```
Then add the plugin to your webpack config. For example:

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'quark-loader'],
      },
    ],
  },
};
```

##### Options
| Name | Type | Default | Description
| --- | --- | --- | --- |
| --- | --- | --- | --- |
| --- | --- | --- | --- |


##### Tutorials

[Using Quark-Loader to minimize css files](https://medium.com)
