var csslintTree = require('broccoli-csslint');

'use strict';

module.exports = {
  name: 'ember-cli-csslint',

  postprocessTree: function(type, tree) {
    if (type === 'all') {
      return csslintTree(tree);
    } else {
      return tree;
    }
  }
};
