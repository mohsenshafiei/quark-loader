const createModuleComposer = (property, value) => {
  return (`\t@composes: ${property}--${value.replace(/ /g,'-').replace(/\(|\)|\%|\./g,'')} from 'styles.scss;'\n`);
}
const createModuleDeclaration = (property, value) => {
  return (`\t${property}: ${value};\n`);
}

const createModuleSelector = (property, value) => {
  return (`.${property}--${value.replace(/ /g,'-').replace(/\(|\)|\%|\./g,'')} {\n`);
}

module.exports = {
  createModuleComposer,
  createModuleSelector,
  createModuleDeclaration
}
