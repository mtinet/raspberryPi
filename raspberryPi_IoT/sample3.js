var http = require('http');
var calc = require('./sample3-1');
var avg = require('./sample3-2');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  res.end(' Sum ' + calc.sum(10,5) + ' Avg ' + avg(6,8) + '\n');
}).listen(8080);

console.log('Server is running');
