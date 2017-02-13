var express = require('express');
var app= express();

var db = require('./models');
var controllers = require('./controllers')

app.get('/api', controllers.api.index);

app.get('/', function (req,res){
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/albums', controllers.albums.index);

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, function () {
  console.log("Express server is up and running on http://localhost:3000");
});
