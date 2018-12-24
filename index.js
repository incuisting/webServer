const { createServer } = require('http');
const port = 8080;

createServer((request, response) => {
  response.end('hello world');
}).listen(port, e => {
  console.error(e);
});
