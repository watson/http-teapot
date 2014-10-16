'use strict';

var fs = require('fs');
var script = fs.readFileSync(path.join(__dirname, 'teapot.min.js'));

module.exports = function (req, res) {
  res.writeHead(418);
  res.end('<script>' + script + '</script>');
};
