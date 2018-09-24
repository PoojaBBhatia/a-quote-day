var express= require('express');
var app=express();

app.get('/',function(request,response){
  response.sendFile(__dirname+'/index.html');
});

app.get('/Hello',function(request,response){
  response.send("Hello How are you ?");
});


var port = process.env.PORT || 8080;

var server= app.listen(port,function(req,res){
  console.log ("Catch the action at http://localhost:"+port);
});
