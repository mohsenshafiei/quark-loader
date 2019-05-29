const fs = require('fs');
const path = require('path');
const postcss = require('postcss');

const composerDist = path.resolve(__dirname, '../../dist/composer.css');
const consumerDist = path.resolve(__dirname, '../../dist/consumer.css');

const composer = fs.createWriteStream(composerDist);
const consumer = fs.createWriteStream(consumerDist);

const createModuleComposer = (property, value) => {
  return (`\t@composes: ${property}--${value.replace(/ /g,'-').replace(/\(|\)/g,'').replace(/\%/g,'').replace(/\./g,'')} from 'styles.scss;'\n`);
}
const createModuleDeclaration = (property, value) => {
  return (`\t${property}: ${value};\n`);
}

const createModuleSelector = (property, value) => {
  return (`.${property}--${value.replace(/ /g,'-').replace(/\(|\)/g,'').replace(/\%/g,'').replace(/\./g,'')} {\n`);
}

module.exports = postcss.plugin('postcss-module-composer', (options = {}) => {
    return root => {
        root.walkRules(rule => {
            composer.write(`${rule.selector} {\n`);
          	rule.selector = rule.selector.replace('.', '!');
            rule.walkDecls(decl => {
                composer.write(createModuleComposer(decl.prop, decl.value));
                consumer.write(createModuleSelector(decl.prop, decl.value));
                consumer.write(createModuleDeclaration(decl.prop, decl.value));
                consumer.write(`}\n`);
            });
            composer.write(`}\n\n`);
        });
    };
});
