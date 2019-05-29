const postcss = require('postcss');
const validateOptions = require('schema-utils');
const { getOptions } = require('loader-utils');
const { moduleComposer } = require('./plugins');
const schema = require('./options.json');

function quarkLoader (content) {
  const plugins = [];
  const options = getOptions(this) || {};
  validateOptions(schema, options, 'Quark-Loader');
  if (options.compress === true) {
    plugins.push(moduleComposer);
  }
  postcss(plugins).process(content).then(result => result);
  return content;
}
module.exports = quarkLoader;
