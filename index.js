const { createServer } = require('http');

createServer((request, response) => {
  const lan = request.headers['accept-language'];
  response.end(lan);
}).listen(8080);
