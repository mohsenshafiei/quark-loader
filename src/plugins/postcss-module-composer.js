const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const HashMap = require('hashmap');
const { createModuleComposer, createModuleSelector, createModuleDeclaration } = require('./utils');

const composerDist = path.resolve(__dirname, '../../dist/composer.css');
const consumerDist = path.resolve(__dirname, '../../dist/consumer.css');

const composer = fs.createWriteStream(composerDist);
const consumer = fs.createWriteStream(consumerDist);

module.exports = postcss.plugin('postcss-module-composer', (options = {}) => root => {
  const hashmap = new HashMap();
  root.walkRules(rule => {
    composer.write(`${rule.selector} {\n`);
    rule.walkDecls(decl => {
      composer.write(createModuleComposer(decl.prop, decl.value));
      hashmap.set(
        createModuleSelector(decl.prop, decl.value),
        createModuleDeclaration(decl.prop, decl.value)
      );
    });
    composer.write(`}\n\n`);
  });
  hashmap.forEach((value, key) => {
    consumer.write(key);
    consumer.write(value);
    consumer.write(`}\n`);
  });
});
