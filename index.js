const { createServer } = require('http')

createServer((request, response) => {
  switch (request.method) {
    case 'GET':
      response.end('get')
      break
    case 'POST':
      response.end('post')
      break
    default:
      response.status = 400
      response.end('不支持的方法')
      break
  }
}).listen(8080)
