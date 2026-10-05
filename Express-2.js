
const express = require('express')
const path = require('path')
const app = express()
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.use((req, res) => {
    res.status(404).send('404 Not Found')
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000 .....")
})
