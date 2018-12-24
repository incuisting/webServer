const { createServer } = require('http');
const port = 8080;

createServer((request, response) => {
  response.write('hello');
  response.write(',');
  response.write('world');
  response.end();
}).listen(port, e => {
  console.error(e);
});
