const postcss = require('postcss');
const validateOptions = require('schema-utils');
const path = require('path');
const fs = require('fs');
const { getOptions } = require('loader-utils');
const { moduleComposer } = require('./plugins');
const schema = require('./options.json');

function quarkLoader(content) {
  const callback = this.async();
  const plugins = [];
  const options = getOptions(this) || {};
  validateOptions(schema, options, 'Quark-Loader');
  if (options.compress === true) {
    plugins.push(moduleComposer);
  }
  postcss(plugins)
    .process(content, { from: undefined })
    .then(() => {
      const main = path.resolve(__dirname, '../dist/quark-loader-output.css');
      fs.readFile(main, (err, source) => {
        if (err) {
          throw err;
        }
        callback(null, postcss.parse(source));
      });
    }).catch((err) => {
      throw (err);
    });
}
module.exports = quarkLoader;
