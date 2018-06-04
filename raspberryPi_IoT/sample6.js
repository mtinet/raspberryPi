var app = require('express')();

var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/sample6.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello : 'world1'});

  socket.on('feedback', function (data) {
    console.log(data);
  });
});

server.listen(8080);

console.log('Hello Socket.IO');
