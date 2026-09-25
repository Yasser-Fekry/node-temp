const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our Home Page')
  } else if (req.url === '/about') {
    res.end('Welcome about Page')
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>We can't find the page</p>
      <a href="/">back Home</a>
    `)
  }
})

console.log("server Running successfully: localhost:5000")
server.listen(5000)
