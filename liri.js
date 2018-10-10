var commandName = process.argv[2];

console.log(commandName);

if (commandName === 'concert-this') {
    concertThis();
} else if (commandName === 'movie-this') {
    movieThis();
}

function concertThis() {
    console.log('do concert stuff');
}

function movieThis() {
    console.log('do movie stuff');
}