//const os = require('./os.js')
// const path = require('./path-module')
//const ReadWrite = require('./read-write.js')
//const async = require('./async')
//const http = require('./http.js')
//1:44:45

// _ For Access Every thing

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
