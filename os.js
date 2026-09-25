// For import Library
const os = require('os')
// info about current user
const user = os.userInfo()
console.log(user)

// methode return the System uptime in Seconds
console.log(`The System Uptime is ${os.uptime()} Seconds.`)

const cuurentOS = {
    name:os.type(),
    release: os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}

console.log(cuurentOS);
