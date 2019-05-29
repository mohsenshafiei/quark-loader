const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const createModuleComposer = require('./utils').createModuleComposer;
const createModuleSelector = require('./utils').createModuleSelector;
const createModuleDeclaration = require('./utils').createModuleDeclaration;

const composerDist = path.resolve(__dirname, '../../dist/composer.css');
const consumerDist = path.resolve(__dirname, '../../dist/consumer.css');

const composer = fs.createWriteStream(composerDist);
const consumer = fs.createWriteStream(consumerDist);

module.exports = postcss.plugin('postcss-module-composer', (options = {}) => {
    return root => {
        root.walkRules(rule => {
            composer.write(`${rule.selector} {\n`);
          	rule.selector = rule.selector.replace('.', '!');
            rule.walkDecls(decl => {
                composer.write(createModuleComposer(decl.prop, decl.value)); // return @composes: example--declaration from 'styles'
                consumer.write(createModuleSelector(decl.prop, decl.value)); // return module selector
                consumer.write(createModuleDeclaration(decl.prop, decl.value)); // return module content
                consumer.write(`}\n`);
            });
            composer.write(`}\n\n`);
        });
    };
});
