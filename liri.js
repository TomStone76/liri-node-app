var moment = require('moment');
var request = require("request");
var fs = require("fs");
var commandName = process.argv[2];
var input = process.argv[3];

if (commandName === 'concert-this') {

    concertThis();

} else if (commandName === 'movie-this') {

    movieThis();

} else if (commandName === "spotify-this-song") {

    spotifyThisSong();

} else if (commandName === "do-what-it-says") {

    doWhatItSays();

}

function concertThis() {

    var artist = input;
    var concertQueryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    console.log(concertQueryURL);

    request(concertQueryURL, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var concerts = JSON.parse(body);
            concerts.forEach(function (concert) {
                console.log("");
                console.log("Venue: " + concert.venue.name);
                console.log("Country: " + concert.venue.country);
                console.log("City: " + concert.venue.city);
                console.log("Date and time: " + moment(concert.datetime).format('MMMM Do YYYY, h:mm:ss a'));
                console.log("");
            });
        }
    });

}

function movieThis() {

    var movieName = input;
    

    if (!movieName) {
        movieName = "Mr. Nobody";
    }

    var movieQueryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    request(movieQueryURL, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log("");
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Year: " + JSON.parse(body).Year);
            console.log("IMDB: " + JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes: " + JSON.parse(body).Ratings[1].Value);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
            console.log("");
        }
    });
}

function spotifyThisSong() {

    var song = input;

    var spotifyRequire = require("node-spotify-api");

    var spotifySearch = new spotifyRequire({
        id: "cf3651e75eca4348ac1be54faa0b2bee",
        secret: "6539bad2e7034adeaeaed6d9f20260d7"
    });

    spotifySearch.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("")
        console.log("Artist name: " + data.tracks.items[0].artists[0].name);
        console.log("Song name: " + data.tracks.items[0].name);
        console.log("Preview link: " + data.tracks.items[0].href);
        console.log("Album name: " + data.tracks.items[0].album.name);
        console.log("");
    });
}

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        var file = data.split(",");
        console.log(file);
        commandName = file[0];
        input = file[1];

        if (commandName === 'concert-this') {

            concertThis(input);
        
        } else if (commandName === 'movie-this') {
        
            movieThis(input);
        
        } else if (commandName === "spotify-this-song") {
        
            spotifyThisSong(input);
        
        } else if (commandName === "do-what-it-says") {
        
            doWhatItSays(input);
        
        }

    });
}