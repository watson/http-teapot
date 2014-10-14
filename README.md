# http-teapot

Add a teapot easter egg to any HTTP server.

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
