var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    
    res.writeHead(200, {'Content-Type': 'application/json'});
    
    var person = {
        firstname: 'John',
        lastname: 'Doe'
    };
    
    // jsonin käsittely
    
    res.end(JSON.stringify(person));
    
}).listen(8888, '127.0.0.1');