const logeer =(req,res,next) => {
const method = req.method
const url = req.url
const time = new Date().getFullYear()
const time2 = new Date().toLocaleString()
console.log(method,url,time,time2)
next()
}

app.get('/' , logeer , (req,res)=>{
    res.send('Home')
})

app.get('/about' , logeer , (req,res)=>{
    res.send('About')
})
