'use strict';

var fs = require('fs');
var path = require('path');
var body = '<script>' + fs.readFileSync(path.join(__dirname, 'teapot.min.js')) + '</script>';

module.exports = function (req, res) {
  res.writeHead(418, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.end(body);
};
