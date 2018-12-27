const { createServer } = require('http');
const url = require('url');

createServer((req, res) => {
  const { query } = url.parse(req.url, true);
  if (query.name) {
    res.end(query.name);
  } else {
    res.end('no name');
  }
}).listen(8080);
