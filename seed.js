var db = require("./models");
var albumsList = [];
var sampleSongs = [];

sampleSongs.push({ name: 'Swamped',
                   trackNumber: 1
});
sampleSongs.push({ name: "Heaven's a Lie",
                   trackNumber: 2
});
sampleSongs.push({ name: 'Daylight Dancer',
                   trackNumber: 3
});
sampleSongs.push({ name: 'Humane',
                   trackNumber: 4
});
sampleSongs.push({ name: 'Self Deception',
                   trackNumber: 5
});
sampleSongs.push({ name: 'Aeon',
                   trackNumber: 6
});
sampleSongs.push({ name: 'Tight Rope',
                   trackNumber: 7
});

albumsList.push({
  artistName: "Nine Inch Nails",
  name: "The Downward Spiral",
  releaseDate: "1994, March 8",
  genres: [
    "industrial",
    "industrial metal"
  ]
});

albumsList.push({
  artistName: "Metallica",
  name: "Metallica",
  releaseDate: "1991, August 12",
  genres: [
    "heavy metal"
  ]
});

albumsList.push({
  artistName: "The Prodigy",
  name: "Music for the Jilted Generation",
  releaseDate: "1994, July 4",
  genres: [
    "electronica",
    "breakbeat hardcore",
    "rave",
    "jungle"
  ]
});

albumsList.push({
  artistName: "Johnny Cash",
  name: "Unchained",
  releaseDate: "1996, November 5",
  genres: [
    "country",
    "rock"
  ]
});

albumsList.forEach(function(album) {
  album.songs = sampleSongs;
});
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
