var express = require('express');
var app= express();

var db = require('./models');
var controllers = require('./controllers');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:true }));

app.get('/api', controllers.api.index);

app.get('/', function (req,res){
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/albums', controllers.albums.index);

app.post('/api/albums', controllers.albums.create);

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, function () {
  console.log("Express server is up and running on http://localhost:3000");
});
