var commandName = process.argv[2];

console.log(commandName);

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
    console.log('do concert stuff');
}

function movieThis() {
    console.log('do movie stuff');
}

