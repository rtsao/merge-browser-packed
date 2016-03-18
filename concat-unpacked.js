'use strict';

module.exports = function concatUnpacked(files) {
  return files.reduce(function(prev, curr) {
    var lastId = prev[prev.length - 1].id;
    return prev.concat(curr.map(function(row) {
      return offsetRowIds(row, lastId);
    }));
  });
}

function offsetRowIds(row, offset) {
  // update row id
  row.id += offset;
  // update ids of deps
  Object.keys(row.deps).forEach(function(dep) {
    row.deps[dep] += offset;
  });
  return row;
}
