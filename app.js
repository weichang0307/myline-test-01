var express = require('express')
var app = express()
app.post('/',(req,res)=>{
    console.log(1)
    res.send('1')
})
app.get('/',(req,res)=>{
    console.log(2)
    res.send('2')

})
app.post('/callback',(req,res)=>{
    console.log(3)
    console.log(req.body)
    res.send('3')

})
app.get('/callback',(req,res)=>{
    console.log(4)
    res.send('4')

})


var PORT = process.env.PORT || 3000
var server = app.listen(PORT,function () {

})