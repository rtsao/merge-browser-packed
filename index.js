'use strict';
var fs = require('fs');
var unpack = require('browser-unpack');
var pack = require('browser-pack');
var browserify = require('browserify');
var sort = require('deps-sort');
var sortTopo = require('deps-topo-sort');
var concat = require('./concat-unpacked');

var ReadableStream = require('readable-stream').Readable;
var dedupe = browserify.prototype._dedupe;

module.exports = function mergeBrowserPacked(paths) {
  var joined = concat(paths.map(getUnpacked));
  var rowStream = streamFromRows(joined);
  return rowStream
    .pipe(sort({dedupe: true}))
    .pipe(dedupe())
    .pipe(sortTopo())
    .pipe(pack({raw: true}));
}

function streamFromRows(rows) {
  var stream = new ReadableStream({objectMode: true});
  rows.forEach(function(row) {
    stream.push(row);
  });
  stream.push(null);
  return stream;
}

function getUnpacked(path) {
  return unpack(getSource(path));
}

function getSource(path) {
  return fs.readFileSync(path, 'utf8');
}
