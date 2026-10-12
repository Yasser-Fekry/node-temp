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
//3:27:00

// req => middleware => res
const express = require('express')
const app = express()


app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
