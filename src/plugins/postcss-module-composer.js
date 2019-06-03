const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const HashMap = require('hashmap');
const {
  createModuleComposer,
  createModuleSelector,
  createModuleDeclaration,
  isGlobal,
  removeSpace,
  removeNotGlobals,
} = require('./utils');

const mainDist = path.resolve(__dirname, '../../dist/quark-loader-output.css');
const main = fs.createWriteStream(mainDist);
module.exports = postcss.plugin('postcss-module-composer', () => (root) => {
  const hashmap = new HashMap();
  let composerString = '';
  let consumerString = '';
  root.walkRules((rule) => {
    const identifier = rule.selector;
    let once = false;
    identifier.split(',').forEach((selector) => {
      if (!isGlobal(removeSpace(selector))) {
        composerString += `${removeSpace(selector)} {\n`;
        rule.walkDecls((decl) => {
          composerString += createModuleComposer(decl.prop, decl.value);
          hashmap.set(
            createModuleSelector(decl.prop, decl.value),
            createModuleDeclaration(decl.prop, decl.value),
          );
        });
        composerString += '}\n';
      } else if (once === false) {
        const globals = removeNotGlobals(rule.selector);
        composerString += `${globals} {\n`;
        rule.walkDecls((decl) => {
          composerString += `${createModuleDeclaration(decl.prop, decl.value)}`;
          hashmap.set(
            createModuleSelector(decl.prop, decl.value),
            createModuleDeclaration(decl.prop, decl.value),
          );
        });
        composerString += '}\n';
        once = true;
      }
    });
  });
  hashmap.forEach((value, key) => {
    consumerString += key;
    consumerString += value;
    consumerString += '}\n';
  });
  const css = consumerString + composerString;
  main.write(css);
  return (true);
});
