// eslint-disable-next-line
const regex = /\(|\)|\%|\.|\#|\,|\+|\:|\"|\/|\/|\`|\'/g;
const globalSelector = require('./global');

const createModuleComposer = (property, value) => (`\tcomposes: ${property}--${value.replace(/ /g, '-').replace(regex, '')};\n`);
const createModuleDeclaration = (property, value) => (`\t${property}: ${value};\n`);
const createModuleSelector = (property, value) => (`.${property}--${value.replace(/ /g, '-').replace(regex, '')} {\n`);
const isGlobal = selector => globalSelector.includes(selector);
const removeSpace = str => str.replace(/\s/g, '');

module.exports = {
  createModuleComposer,
  createModuleDeclaration,
  createModuleSelector,
  isGlobal,
  removeSpace,
};
