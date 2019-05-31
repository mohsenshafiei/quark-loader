// eslint-disable-next-line
const regex = /\(|\)|\%|\.|\#|\,|\+|\:|\"|\/|\/|\`|\'/g;
const createModuleComposer = (property, value) => (`\tcomposes: ${property}--${value.replace(/ /g, '-').replace(regex, '')};\n`);
const createModuleDeclaration = (property, value) => (`\t${property}: ${value};\n`);
const createModuleSelector = (property, value) => (`.${property}--${value.replace(/ /g, '-').replace(regex, '')} {\n`);

module.exports = {
  createModuleComposer,
  createModuleDeclaration,
  createModuleSelector,
};
