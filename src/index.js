const postcss = require('postcss');
const moduleParser = require('./plugins').moduleParser;

function quarkLoader (content) {
  const plugins = [];
  const options = {
    compress: true,
  }

  if (options.compress === true) {
    plugins.push(moduleParser);
  }
  postcss(plugins).process(content).then(result => console.log(result));

  debugger;
  return content;
}
module.exports = quarkLoader;
