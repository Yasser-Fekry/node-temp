//const os = require('./os.js')
// const path = require('./path-module')
//const ReadWrite = require('./read-write.js')
//const async = require('./async')
//const http = require('./http.js')
//const time = require('./setTimeout')
//const awsait = require('./async-await')
//const event = require('./EventEmitter')
//const stream = require('./streams')
//const https = require('./server-create')
//const express = require('./Express')
//const Express = require('./Express-2')
const logeer  = require('./logger')
const { products } = require('./data')
const authorize = require('./authorize')
const express = require('express')
const app = express()
app.use([logeer, authorize])



app.get('/' ,  (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })

  res.json(newProducts)
})


app.get('/about', (req,res)=>{
    res.send('About')
})

app.get('/api' , (req,res)=>{
    res.send('api')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
