var http = require("http");

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Pi!\nzzaaaz'); // view the message on Web Browser window
  
}).listen(8080);

//view the message on Putty console window
console.log('Hello Pii!');
