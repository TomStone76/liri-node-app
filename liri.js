// var spotify = new Spotify (keys.spotify);

var request = require("request");
var commandName = process.argv[2];
var input = process.argv[3];

if (commandName === 'concert-this') {

    concertThis();

} else if (commandName === 'movie-this') {

    movieThis();

} else if (commandName === "spotify-this-song") {

    spotifyThis();

} else if (commandName === "do-what-it-says") {

    doWhatItSays();

}

function concertThis() {
    
    var artist = input;
    request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp");


}

function movieThis() {
    var movieName = input;
    var movieQueryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    console.log(movieQueryUrl);
    request(movieQueryUrl, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Year: " + JSON.parse(body).Year);
            console.log("IMDB: " + JSON.parse(body).IMDB);
            console.log("Rotten Tomatoes: " + JSON.parse(body).Tomatoes);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
        }
    });
}

function spotifyThis() {
    var songName = input;
    var songQueryURL = ""

    console.log(songQueryUrl);
    request(songQueryUrl, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log("Artist: " + JSON.parse(body).Artist);
            console.log("Song Name: " + JSON.parse(body).Year);
            console.log("Preview: " + JSON.parse(body).IMDB);
            console.log("Album: " + JSON.parse(body).Tomatoes);
        }
    });

    console.log("do Spotify stuff");

}

function doWhatItSays() {

    cconsole.log("do what it says");

}