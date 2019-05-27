const nodeTypes = {
  AnPlusB: {
    type: 'AnPlusB',
    attributes: ['a', 'b']
  },
  Atrule: {
    type: 'Atrule',
    attributes: ['name', 'prelude', 'block']
  },
  AtrulePrelude: {
    type: 'AtrulePrelude',
    attributes: ['children']
  },
  AttributeSelector: {
    type: 'AttributeSelector',
    attributes: ['name', 'matcher', 'value', 'flags']
  },
  Block: {
    type: 'Block',
    attributes: ['children']
  },
  Brackets: {
    type: 'Brackets',
    attributes: ['children']
  },
  CDC: {
    type: 'CDC',
    attributes: ['']
  },
  CDO: {
    type: 'CDO',
    attributes: ['']
  },
  ClassSelector: {
    type: 'ClassSelector',
    attributes: ['name']
  },
  Combinator: {
    type: 'Combinator',
    attributes: ['name']
  },
  Comment: {
    type: 'Comment',
    attributes: ['value']
  },
  Declaration: {
    type: 'Declaration',
    attributes: ['property'] // other attribute: value, important
  },
  DeclarationList: {
    type: 'DeclarationList',
    attributes: ['children']
  },
  Dimension: {
    type: 'Dimension',
    attributes: ['value', 'unit']
  },
  Function: {
    type: 'Function',
    attributes: ['children', 'name']
  },
  HexColor: {
    type: 'HexColor',
    attributes: ['value']
  },
  IdSelector: {
    type: 'IdSelector',
    attributes: ['name']
  },
  Identifier: {
    type: 'Identifier',
    attributes: ['name']
  },
  MediaFeature: {
    type: 'MediaFeature',
    attributes: ['value', 'name']
  },
  MediaQuery: {
    type: 'MediaQuery',
    attributes: ['children']
  },
  MediaQueryList: {
    type: 'MediaQueryList',
    attributes: ['children']
  },
  Nth: {
    type: 'Nth',
    attributes: ['selector', 'nth']
  },
  Number: {
    type: 'Number',
    attributes: ['value']
  },
  Operator: {
    type: 'Operator',
    attributes: ['value']
  },
  Parentheses: {
    type: 'Parentheses',
    attributes: ['children']
  },
  Percentage: {
    type: 'Percentage',
    attributes: ['value']
  },
  PseudoClassSelector: {
    type: 'PseudoClassSelector',
    attributes: ['name', 'children']
  },
  PseudoElementSelector: {
    type: 'PseudoElementSelector',
    attributes: ['name', 'children']
  },
  Ratio: {
    type: 'Ratio',
    attributes: ['left', 'right']
  },
  Raw: {
    type: 'Raw',
    attributes: ['value']
  },
  Rule: {
    type: 'Rule',
    attributes: ['block', 'prelude']
  },
  Selector: {
    type: 'Selector',
    attributes: ['children']
  },
  SelectorList: {
    type: 'SelectorList',
    attributes: ['children']
  },
  String: {
    type: 'String',
    attributes: ['value']
  },
  StyleSheet: {
    type: 'StyleSheet',
    attributes: ['children']
  },
  TypeSelector: {
    type: 'TypeSelector',
    attributes: ['name']
  },
  UnicodeRange: {
    type: 'UnicodeRange',
    attributes: ['value']
  },
  Url: {
    type: 'Url',
    attributes: ['value']
  },
  Value: {
    type: 'Value',
    attributes: ['children']
  },
  WhiteSpace: {
    type: 'WhiteSpace',
    attributes: ['value']
  }
};

module.exports = nodeTypes;
