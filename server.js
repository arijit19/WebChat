var express = require('express')
var app = express()
var hostname = 'localhost'
var path = require('path')
var port = 3000

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'client','views'))
// app.set('views', path.resolve(__dirname,'client','views'))
// app.set('partials', path.resolve(__dirname,'client','partials'))




app.use('/static', express.static(path.resolve(__dirname,'client')))

app.use('*', function(req, res)
{
  res.render('index.ejs')
})

// app.get('/home', function(req,res)
// {
//   res.render('index.ejs')
// })
//
// app.get('/about', function(req,res)
// {
//   res.render('partials/about.html')
// })
// app.get('/contact', function(req,res)
// {
//   res.render('partials/contact.html')
// })

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`)
})
