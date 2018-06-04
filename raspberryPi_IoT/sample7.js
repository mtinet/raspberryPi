var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/sample7.html');
});

io.on('connection', function (socket) {
  socket.emit('msg', { id : 'hi', msg : 'Chat is ready!'});
  socket.on('msg1', function (data) {
    socket.broadcast.emit('msg', data);
  });

  socket.on('msg2', function (data) {
    socket.emit('msg', data);
  });

  socket.on('msg3', function (data) {
    io.emit('msg', data);
  });
});

server.listen(8080);
console.log('Socket.IO Chat');
