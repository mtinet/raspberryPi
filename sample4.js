var app = require('express')();

app.get('/', function(req, res) {
  res.send('Hello Pi!!zzzzz!!!');
});

app.listen(8080);
console.log('Server is running!!')
