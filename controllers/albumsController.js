var db = require('../models');

function index(req, res){
  db.Album.find({}, function(err, albums){
    res.json(albums);
  });
}

function create(req, res){
  var genres = req.body.genres.split(',').map(function(item){
    return item.trim();
  });
    req.body.genres = genres;
  db.Album.create(req.body, function(err,newAlbum){
    res.json(newAlbum);
  });
}

function show(req, res){}

function destroy(req, res){}

function update(req, res){}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update,
//  albums: albums
};
