const { createServer } = require('http')

createServer((req, res) => {
  res.writeHeader(200, {
    'Set-Cookie': ['aa=vv', 'cc=dd']
  })
  res.end(`Your cookies are: ${req.headers.cookie}`)
}).listen(8080)
