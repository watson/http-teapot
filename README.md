# http-teapot

Add support for [RFC 2324](https://www.ietf.org/rfc/rfc2324.txt) to any
HTTP server.

![Utah Teapot](https://raw.githubusercontent.com/watson/http-teapot/master/teapot.png)

[![build status](https://secure.travis-ci.org/watson/http-teapot.png)](http://travis-ci.org/watson/http-teapot)

## Installation

```
npm install http-teapot
```

## Usage

Just add http-teapot as a routing function. It supports most routing
modules including [Express](https://github.com/strongloop/express) and
[router](https://github.com/gett/router).

Express example:

```js
var teapot = require('http-teapot');
var app = express();

app.get('/teapot', teapot);
```

There is also a build in HTTP server that you can start from the command
line by running:

```
npm start
```

## License

MIT
