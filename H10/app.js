var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    var message = "Hello World...";
    
    //muuttujan arvon asettaminen templateen
    
    html = html.replace('{Message}', message);
    res.end(html);
    
}).listen(8888, '127.0.0.1');