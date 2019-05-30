// eslint-disable-next-line
const regex = /\(|\)|\%|\.|\#|\,|\+|\:|\"|\/|\/|\`|\'/g;
const createModuleComposer = (property, value) => (`\t@composes: ${property}--${value.replace(/ /g, '-').replace(regex, '')} from 'styles.scss;'\n`);
const createModuleDeclaration = (property, value) => (`\t${property}: ${value};\n`);

const createModuleSelector = (property, value) => (`.${property}--${value.replace(/ /g, '-').replace(regex, '')} {\n`);

module.exports = {
  createModuleComposer,
  createModuleSelector,
  createModuleDeclaration
};
