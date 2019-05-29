const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const { createModuleComposer, createModuleSelector, createModuleDeclaration } = require('./utils');

const composerDist = path.resolve(__dirname, '../../dist/composer.css');
const consumerDist = path.resolve(__dirname, '../../dist/consumer.css');

const composer = fs.createWriteStream(composerDist);
const consumer = fs.createWriteStream(consumerDist);

module.exports = postcss.plugin('postcss-module-composer', (options = {}) => root => {
  root.walkRules(rule => {
    composer.write(`${rule.selector} {\n`);
    rule.walkDecls(decl => {
      composer.write(createModuleComposer(decl.prop, decl.value));
      consumer.write(createModuleSelector(decl.prop, decl.value));
      consumer.write(createModuleDeclaration(decl.prop, decl.value));
      consumer.write(`}\n`);
    });
    composer.write(`}\n\n`);
  });
});
