const postcss = require('postcss');

module.exports = postcss.plugin('postcss-module-parser', (options = {}) => {
    return root => {
        root.walkRules(rule => {
            // Transform each rule here
          	rule.selector = rule.selector.replace('.', '!');
            rule.walkDecls(decl => {
                // Transform each property declaration here
                decl.prop = `${decl.prop}--${
                	decl.value.replace(/ /g,'-')
                  	.replace(/\(|\)/g,'')
                  	.replace(/\%/g,'')}`;
              	decl.value = '';
            });
        });
    };
});
