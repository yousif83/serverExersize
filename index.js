var express = require("express")
var server =express()
var yousif=require('./yousif.json')
var port=process.env.port || 8080
server.get('/',function(request,response){
  response.send("replace {name}   :")
})

server.get('/yousif',function(request,response){
  response.send(yousif)
})




server.get('*', function (request, response) {
  response.status(404)
  response.send("Dude, wrong page")
})

server.listen(port)
