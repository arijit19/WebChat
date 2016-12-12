var express = require('express')
var app = express()
var hostname = 'localhost'
var path = require('path')
var port = 3000

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname,'client','views'))

app.get('/', function(req, res)
{
  res.render('index.ejs')
})

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`)
})
