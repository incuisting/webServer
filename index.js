const { createServer } = require('http');
const port = 8080;
const server = createServer();

server.on('request', (request, response) => {
  response.end('hello world');
});

server.listen(port, e => {
  console.error(e);
});
