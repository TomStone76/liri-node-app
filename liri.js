// var spotify = new Spotify (keys.spotify);


var moment = require('moment');
var request = require("request");
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

        console.log(JSON.stringify(data, null, 2));
        console.log(data.tracks.items);
    });
}

function doWhatItSays() {

    console.log("do what it says");

}