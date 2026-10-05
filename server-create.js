const http = require('http')
const {readFileSync} = require('fs')

const homePage = readFileSync('./navbar-app/index.html')
const Styel = readFileSync('./navbar-app/styles.css')
const logic = readFileSync('./navbar-app/browser-app.js')
const logo = readFileSync('./navbar-app/logo.svg')

const server = http.createServer((req,res) => {
    const url = req.url;
    if(url === '/'){
     console.log(req.method)
    console.log(req.url)
    res.writeHead(200,{'content-type':'text/html'})
    res.write(homePage)
    console.log(`user hit the Server`)
    res.end()
    }else if(url === '/styles.css'){
    console.log(req.method)
    console.log(req.url)
    res.writeHead(200,{'content-type':'text/css'})
    res.write(`${Styel}`)
    console.log(`Welcom to About Page`)
    res.end()

    }else if(url == '/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(logo)
        res.end()
    }else if(url == '/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(logic)
        res.end()
    }
    else {
    console.log(req.method)
    console.log(req.url)
    res.writeHead(404,{'content-type':'text/html'})
    res.write(`404 Not found `)
    console.log(`404 Not Found`)
    }
})
server.listen(5000)
