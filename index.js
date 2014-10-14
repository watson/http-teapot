'use strict';

module.exports = function (req, res) {
  res.writeHead(418);
  res.end("I'm a teapot");
};
