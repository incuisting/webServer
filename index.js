const { createReadStream } = require('fs');
const { createServer } = require('http');

createServer((request, response) => {
  createReadStream(__filename).pipe(response);
}).listen(8080);
