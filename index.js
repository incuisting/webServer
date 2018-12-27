const { createServer } = require('http');
const url = require('url');

createServer((req, res) => {
  if (req.method === 'POST') {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });
    req.on('end', () => {
      try {
        const requestData = JSON.parse(data);
        requestData.ourMessage = 'success';
        res.writeHead(200, {
          'Content-Type': 'application/json',
        });
        res.end(JSON.stringify(requestData));
      } catch (e) {
        res.setStatus = 400;
        res.end('错误json');
      }
    });
  } else {
    res.statusCode = 400;
    res.end('Unsupported method, please POST a JSON object');
  }
}).listen(8080);
