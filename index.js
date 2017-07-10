var express = require("express")
var server =express()
var yousif=require('./yousif.json')
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

server.listen(3000)
