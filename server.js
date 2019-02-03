var http = require('http');
var math = require('./myModules/myMath');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true).query;
    console.log('req '+ req.url);
    fs.readFile('demofile1.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
}).listen(8080);