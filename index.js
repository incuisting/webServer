const { createServer } = require('http');

createServer((request, response) => {
  response.writeHead(200, {
    'content-type': 'application/json',
  });
  response.end(JSON.stringify({ a: 1 }));
}).listen(8080);
