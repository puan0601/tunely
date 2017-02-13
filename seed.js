var db = require("./models");
var albumsList = [

];

db.Album.remove({}, function(err, albums){
  db.Album.create(albumsList, function(err, albums){
    if(err){
      return console.log("err", err);
    }
    console.log("all albums:", albums);
    console.log("created", albums.length, "albums");
    process.exit();
  });
});
