(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function (n) { return n * 50 }
},{}],3:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{}],2:[function(require,module,exports){
var z = require('./z.js');
var w = require('./w.js');
console.log(z(5) * w(2));
},{"./w.js":1,"./z.js":3}],5:[function(require,module,exports){
module.exports = function (n) { return n * 111 }
},{}],4:[function(require,module,exports){
var z = require('./z.js');
console.log(z(2) + 111);
},{"./z.js":5}]},{},[2,4]);
