'use strict';

var fs = require('fs');
var path = require('path');
var test = require('tape');
var concat = require('concat-stream');
var merge = require('../');

test('basic test', function (t) {
  t.plan(1);

  var packed = [
    './fixtures/x-packed.js',
    './fixtures/y-packed.js'
  ];

  merge(packed.map(toAbsolute))
    .pipe(concat({encoding: 'string'}, function(data) {
      t.equal(data,
        fs.readFileSync(toAbsolute('./fixtures/x-y-merged.js'), 'utf8'),
        'output matches expected'
      );
    }));
});

function toAbsolute(relative) {
  return path.join(__dirname, relative);
}

