'use strict';

module.exports = function concatUnpacked(files) {
  return files.reduce(function(prev, curr) {
    var lastId = prev[prev.length - 1].id;
    return prev.concat(curr.map(function(row) {
      return offsetRowIds(row, lastId);
    }));
  });
}

var regex = /^arguments\[4\]\[(\d+)\]\[0\]\.apply\(exports,arguments\)$/;

function offsetRowIds(row, offset) {
  // update row id
  row.id += offset;

  // update ids of deps
  Object.keys(row.deps).forEach(function(dep) {
    row.deps[dep] += offset;
  });

  // update dupe source if necessary
  var matches = regex.exec(row.source);
  if (matches && matches[1]) {
    row.source = 'arguments[4][' + row.deps.dup + '][0].apply(exports,arguments)';
  }

  return row;
}
