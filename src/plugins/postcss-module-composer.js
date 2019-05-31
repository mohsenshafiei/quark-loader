const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const HashMap = require('hashmap');
const { createModuleComposer, createModuleSelector, createModuleDeclaration } = require('./utils');

const composerDist = path.resolve(__dirname, '../../dist/composer.css');
const consumerDist = path.resolve(__dirname, '../../dist/consumer.css');
const mainDist = path.resolve(__dirname, '../../dist/main.css');
const composer = fs.createWriteStream(composerDist);
const consumer = fs.createWriteStream(consumerDist);
const main = fs.createWriteStream(mainDist);
module.exports = postcss.plugin('postcss-module-composer', () => (root) => {
  const hashmap = new HashMap();
  let composerString = '';
  let consumerString = '';
  root.walkRules((rule) => {
    composer.write(`${rule.selector} {\n`);
    composerString += `${rule.selector} {\n`;
    rule.walkDecls((decl) => {
      composer.write(createModuleComposer(decl.prop, decl.value));
      composerString += createModuleComposer(decl.prop, decl.value);
      hashmap.set(
        createModuleSelector(decl.prop, decl.value),
        createModuleDeclaration(decl.prop, decl.value),
      );
    });
    composer.write('}\n');
    composerString += '}\n';
  });
  hashmap.forEach((value, key) => {
    consumer.write(key);
    consumerString += key;
    consumer.write(value);
    consumerString += value;
    consumer.write('}\n');
    consumerString += '}\n';
  });
  const css = consumerString + composerString;
  main.write(css);
  return (false);
});
