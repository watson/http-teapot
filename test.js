'use strict';

var http = require('http');
var test = require('tape');
var teapot = require('./');

var server = http.createServer(teapot);

server.listen(function () {
  var port = server.address().port;
  var url = 'http://localhost:' + port;

  test('should return a teapot', function (t) {
    var req = http.get(url, function (res) {
      t.equal(res.statusCode, 418);
      t.end();
    });
  });

  test('end', function (t) {
    t.end();
    process.exit();
  });
});
