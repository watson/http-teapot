'use strict';

var fs = require('fs');
var script = fs.readFileSync('./bundle.js');

module.exports = function (req, res) {
  res.writeHead(418);
  res.end('<script>' + script + '</script>');
};
