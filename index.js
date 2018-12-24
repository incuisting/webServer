const { createServer } = require('http');

createServer((request, response) => {
  switch (request.url) {
    case '/':
      response.end('main');
      break;
    case '/about':
      response.end('about');
      break;
    default:
      response.status = 404;
      response.end();
  }
}).listen(8080);
