const EventEmitter = require('events')
// Make new Object from EventEmitter class
const customEmitter = new EventEmitter()
// Register a listener
customEmitter.on('RESPONSE', (name,id)=>{
    console.log(` Data received == Name: ${name}, ID: ${id}`)
})

customEmitter.on('RESPONSE', ()=>{
    console.log(' ==== Some Other Logic Here ==== ')
})

// Register a listener make sure to call the emit method to trigger the event
customEmitter.emit('RESPONSE', 'John', 123)

