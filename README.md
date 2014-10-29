# http-teapot

Add support for [RFC 2324](https://www.ietf.org/rfc/rfc2324.txt) to any
HTTP server.

![Utah Teapot](https://raw.githubusercontent.com/watson/http-teapot/master/teapot.png)

[![build status](https://secure.travis-ci.org/watson/http-teapot.png)](http://travis-ci.org/watson/http-teapot)

## Installation

```
npm install http-teapot
```

or if you're going to use the cli

```
npm install http-teapot -g
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
app.listen(1337);
```

Now, if you visit [http://localhost:1337/teapot](http://localhost:1337/teapot) you must see a teapot ;)

## CLI

There is also a built in HTTP server that you can start from the command line.

If you install the module globally you can run the server by running the `http-teapot` command.

## Cheat codes

- **Rotate:** Click+drag the mouse
- **Zoom:** Hold down *alt* and scroll
- **Pan:** Hold down *ctrl* and click+drag the mouse

## License

MIT
