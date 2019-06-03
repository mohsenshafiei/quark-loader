const globalSelector = require('./global');

const regex = /\(|\)|%|\.|#|,|\+|:|"|\/|\/|`|'/g;
const unvalid = /^[\w\s.,]+$/;
const createModuleComposer = (property, value) => (`\tcomposes: ${property}--${value.replace(/ /g, '-').replace(regex, '')};\n`);

const createModuleDeclaration = (property, value) => (`\t${property}: ${value};\n`);

const createModuleSelector = (property, value) => (`.${property}--${value.replace(/ /g, '-').replace(regex, '')} {\n`);

const isGlobal = selector => globalSelector.includes(selector);

const removeSpace = str => str.trim();

const shouldSkip = str => str.search(unvalid);

const removeNotGlobals = (str) => {
  let result = '';
  str.split(',').forEach((item) => {
    result += (isGlobal(removeSpace(item))) ? `, ${removeSpace(item)}` : '';
    return false;
  });
  return result.substr(1).trim();
};

module.exports = {
  createModuleComposer,
  createModuleDeclaration,
  createModuleSelector,
  removeSpace,
  removeNotGlobals,
  isGlobal,
  shouldSkip,
};
