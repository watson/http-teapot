#!/usr/bin/env node

'use strict';

var http = require('http');
var teapot = require('./');

var server = http.createServer(teapot);

server.listen(function () {
  console.log('Server is running, open http://localhost:'
    + server.address().port + ' in your browser');
});
