const fs = require('fs');
const path = require('path');
const csstree = require('css-tree');
const nodeTypes = require('./nodeTypes');

const dist = path.resolve(__dirname, '../dist/style.css');
const file = fs.createWriteStream(dist);

function quarkLoader (content) {
  let template = '';
  let declaration = '';
  let classString = '';
  let classSelector = '';
  const ast = csstree.parse(content);
  const astClone = csstree.toPlainObject(csstree.clone(ast));
  csstree.walk(astClone, node => {
    switch (node.type) {
      case nodeTypes.AnPlusB.type: {
        break;
      }
      case nodeTypes.Atrule.type: {
        break;
      }
      case nodeTypes.AtrulePrelude.type: {
        break;
      }
      case nodeTypes.AttributeSelector.type: {
        break;
      }
      case nodeTypes.Block.type: {
        break;
      }
      case nodeTypes.Brackets.type: {
        break;
      }
      case nodeTypes.CDC.type: {
        break;
      }
      case nodeTypes.CDO.type: {
        break;
      }
      case nodeTypes.ClassSelector.type: {
        const style = `.${classSelector} {\n ${classString} ${`@composes: ${declaration}--${template} from 'styles'; \n`}}\n`;
        file.write(style);
        classSelector = node.name;
        classString = '';
        template = '';
        break;
      }
      case nodeTypes.Combinator.type: {
        break;
      }
      case nodeTypes.Comment.type: {
        break;
      }
      case nodeTypes.Declaration.type: {
        nodeTypes.Declaration.attributes.map(attribute => {
          if (declaration !== '' && template !== '') {
            classString += `@composes: ${declaration}--${template} from 'styles'; \n`;
          }
          template = '';
          declaration = node[attribute];
          return true;
        });
        break;
      }
      case nodeTypes.DeclarationList.type: {
        break;
      }
      case nodeTypes.Dimension.type: {
        nodeTypes.Dimension.attributes.map(attribute => {
          template += node[attribute];
          return false;
        });
        break;
      }
      case nodeTypes.Function.type: {
        break;
      }
      case nodeTypes.HexColor.type: {
        nodeTypes.HexColor.attributes.map(attribute => {
          template += `${node[attribute]}-`;
          return false;
        });
        break;
      }
      case nodeTypes.IdSelector.type: {
        break;
      }
      case nodeTypes.Identifier.type: {
        nodeTypes.Identifier.attributes.map(attribute => {
          template += node[attribute];
          return false;
        });
        break;
      }
      case nodeTypes.MediaFeature.type: {
        break;
      }
      case nodeTypes.MediaQuery.type: {
        break;
      }
      case nodeTypes.MediaQueryList.type: {
        break;
      }
      case nodeTypes.Nth.type: {
        break;
      }
      case nodeTypes.Number.type: {
        nodeTypes.Number.attributes.map(attribute => {
          template += node[attribute];
          return false;
        });
        break;
      }
      case nodeTypes.Operator.type: {
        break;
      }
      case nodeTypes.Parentheses.type: {
        nodeTypes.Parentheses.attributes.map(attribute => {
          template += node[attribute];
          return false;
        });
        break;
      }
      case nodeTypes.Percentage.type: {
        nodeTypes.Percentage.attributes.map(attribute => {
          template += node[attribute];
          return false;
        });
        break;
      }
      case nodeTypes.PseudoClassSelector.type: {
        break;
      }
      case nodeTypes.PseudoElementSelector.type: {
        break;
      }
      case nodeTypes.Ratio.type: {
        break;
      }
      case nodeTypes.Raw.type: {
        break;
      }
      case nodeTypes.Rule.type: {
        break;
      }
      case nodeTypes.Selector.type: {
        break;
      }
      case nodeTypes.SelectorList.type: {
        break;
      }
      case nodeTypes.String.type: {
        nodeTypes.String.attributes.map(attribute => {
          template += node[attribute];
          return false;
        });
        break;
      }
      case nodeTypes.StyleSheet.type: {
        break;
      }
      case nodeTypes.TypeSelector.type: {
        break;
      }
      case nodeTypes.UnicodeRange.type: {
        break;
      }
      case nodeTypes.Url.type: {
        break;
      }
      case nodeTypes.Value.type: {
        break;
      }
      case nodeTypes.WhiteSpace.type: {
        break;
      }
      default:
        break;
    }
  });
  const style = `.${classSelector} {\n ${classString}  ${`@composes: ${declaration}--${template} from 'styles'; \n`} }\n`;
  file.write(style);
  template = '';
  classSelector = '';
  classString = '';
  return content;
}

module.exports = quarkLoader;
