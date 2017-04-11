var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res){
    
    res.send('<html>Hello World!</html>');
});

app.listen(port);