const express = require('express');
const app = express()
// app.get , app.post , app.put , app.delete , app.use ,
app.get('/',(req,res) => {
    res.status(200).send('<h1>Home Page</h1>')
})

app.get('/About', (req,res) =>{
    res.status(200).send('<h1>About Page</h1>')
})
app.all('*' ,(req,res) =>{
    res.status(404).send('<h1> 404 Not Found </h1>')
})
app.listen(5000,() => {
    console.log(`Server listen in Port 5000...`)
    }
)
