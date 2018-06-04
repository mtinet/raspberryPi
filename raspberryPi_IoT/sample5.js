var app = require('express')();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/req/:id', function(req, res) {
  var object = {param : req.params.id};
  res.json(object);

});

app.listen(8080);

console.log('Hello Pi!!zaza ' + __dirname);
