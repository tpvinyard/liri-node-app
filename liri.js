require("dotenv").config();
let keys = require("./keys.js");
let axios = require('axios');
let Spotify = require('node-spotify-api');
let fs = require('fs');

// new keys
const spotify = new Spotify(keys.spotify);

const omdb = keys.omdb.key;

// const bandsInTown = keys.bandsInTown.key;

let command = process.argv[2];
let toSearch = process.argv.slice(3).join('+');

switch (command) {
    case 'concert-this':
//        searchBandsInTown(toSearch);
    break;
    case 'spotify-this-song':
        searchSpotify(toSearch);
    break;
    case 'movie-this':
        searchOMDB(toSearch);
    break;
    case 'do-what-it-says':
        fs.readFile('random.txt', 'utf8', function(err, data) {
            if (err) {
                console.log(err);
            }
            data = data.split(', ');
            if (data[0] === 'concert-this') {
                searchBandsInTown(data[1]);
            } else if (data[0] === 'spotify-this-song') {
                searchSpotify(data[1]);
            } else if (data[0] === 'movie-this') {
                searchOMDB(data[1]);
            }
        });
    break;
    default:
        console.log("Please enter a valid search term ('concert-this', 'spotify-this-song', 'movie-this', 'do-what-it-says'): \n");
}


function searchOMDB(toSearch) {
    if (toSearch) {
        axios
            .get(`http://www.omdbapi.com/?t=${toSearch}&y=&plot=short&apikey=${omdb}`)
            .then(function(response) {
                appendTextToLogAndConsoleLog('');
                appendTextToLogAndConsoleLog('-------------------------------------');
                appendTextToLogAndConsoleLog('Title: ' + response.data.Title);
                appendTextToLogAndConsoleLog('Year of release: ' + response.data.Year);
                appendTextToLogAndConsoleLog('IMDB Rating: ' + response.data.imdbRating);
                appendTextToLogAndConsoleLog('Rotten Tomatoes Rating: ' + response.data.Ratings[1].Value);
                appendTextToLogAndConsoleLog('Country of Production: ' + response.data.Country);
                appendTextToLogAndConsoleLog('Language: ' + response.data.Language);
                appendTextToLogAndConsoleLog('Plot: ' + response.data.Plot);
                appendTextToLogAndConsoleLog('Actors/Actresses: ' + response.data.Actors);
                appendTextToLogAndConsoleLog('-------------------------------------');
                appendTextToLogAndConsoleLog('');
            })
            .catch(function(err) {
                appendTextToLogAndConsoleLog(err);
            })
    } else {
        axios
        .get(`http://www.omdbapi.com/?t=Mr.+Nobody,&y=&plot=short&apikey=${omdb}`)
        .then(function(response) {
            appendTextToLogAndConsoleLog('');
            appendTextToLogAndConsoleLog('-------------------------------------');
            appendTextToLogAndConsoleLog('Title: ' + response.data.Title);
            appendTextToLogAndConsoleLog('Year of release: ' + response.data.Year);
            appendTextToLogAndConsoleLog('IMDB Rating: ' + response.data.imdbRating);
            appendTextToLogAndConsoleLog('Rotten Tomatoes Rating: ' + response.data.Ratings[1].Value);
            appendTextToLogAndConsoleLog('Country of Production: ' + response.data.Country);
            appendTextToLogAndConsoleLog('Language: ' + response.data.Language);
            appendTextToLogAndConsoleLog('Plot: ' + response.data.Plot);
            appendTextToLogAndConsoleLog('Actors/Actresses: ' + response.data.Actors);
            appendTextToLogAndConsoleLog('-------------------------------------');
            appendTextToLogAndConsoleLog('');
        })
        .catch(function(err) {
            appendTextToLogAndConsoleLog(err);
        });
    };
};

function searchSpotify(toSearch) {
    if (toSearch) {
        spotify
            .request(`https://api.spotify.com/v1/search?q="${toSearch}"&type=track`)
            .then(function(response) {
                appendTextToLogAndConsoleLog('');
                appendTextToLogAndConsoleLog('-------------------------------------');
                appendTextToLogAndConsoleLog('Artist Name(s): ' + response.tracks.items[0].artists[0].name);
                appendTextToLogAndConsoleLog('Song name: ' + response.tracks.items[0].name);
                appendTextToLogAndConsoleLog('Link on Spotify: ' + response.tracks.items[0].external_urls.spotify);
                appendTextToLogAndConsoleLog('Album: ' + response.tracks.items[0].album.name);
                appendTextToLogAndConsoleLog('-------------------------------------');
                appendTextToLogAndConsoleLog('');
            })
            .catch(function(err) {
                appendTextToLogAndConsoleLog(err);
            })
    } else {
        spotify
            .request(`https://api.spotify.com/v1/search?q="The+Sign"+artist:"ace+of+base"&type=track`)
            .then(function(response) {
                appendTextToLogAndConsoleLog('');
                appendTextToLogAndConsoleLog('-------------------------------------');
                appendTextToLogAndConsoleLog('Artist Name(s): ' + response.tracks.items[0].artists[0].name);
                appendTextToLogAndConsoleLog('Song name: ' + response.tracks.items[0].name);
                appendTextToLogAndConsoleLog('Link on Spotify: ' + response.tracks.items[0].external_urls.spotify);
                appendTextToLogAndConsoleLog('Album: ' + response.tracks.items[0].album.name);
                appendTextToLogAndConsoleLog('-------------------------------------');
                appendTextToLogAndConsoleLog('');
            })
            .catch(function(err) {
                appendTextToLogAndConsoleLog(err);
            })
    };
};

// function searchBandsInTown(toSearch) {
//     if(toSearch) {
//         axios
//         .get(`https://rest.bandsintown.com/artists/${toSearch}/events?app_id=codingbootcamp`)
//         .then(function(response) {
//             appendTextToLogAndConsoleLog('');
//             appendTextToLogAndConsoleLog('-------------------------------------');
//             appendTextToLogAndConsoleLog('Venue: ' + response.data.venue.name);
//             appendTextToLogAndConsoleLog('Where: ' + response.data.venue.city + ', ' + response.data.venue.region + ' ' + response.data.venue.country);
//             appendTextToLogAndConsoleLog('Venue: ' + response.data.venue.datetime);
//             appendTextToLogAndConsoleLog('-------------------------------------');
//             appendTextToLogAndConsoleLog('');
//         })
//         .catch(function(err) {
//             appendTextToLogAndConsoleLog(err);
//         });
//     } else {
//         axios
//         .get(`https://rest.bandsintown.com/artists/Jonas+Brothers/events?app_id=codingbootcamp`)
//         .then(function(response) {
//             appendTextToLogAndConsoleLog('');
//             appendTextToLogAndConsoleLog('-------------------------------------');
//             appendTextToLogAndConsoleLog('Venue: ' + response.data.venue.name);
//             appendTextToLogAndConsoleLog('Where: ' + response.data.venue.city + ', ' + response.data.venue.region + ' ' + response.data.venue.country);
//             appendTextToLogAndConsoleLog('Venue: ' + response.data.venue.datetime);
//             appendTextToLogAndConsoleLog('-------------------------------------');
//             appendTextToLogAndConsoleLog('');
//         })
//         .catch(function(err) {
//             appendTextToLogAndConsoleLog(err);
//         });
//     }
// };

function appendTextToLogAndConsoleLog(text) {
    console.log(text);
    fs.appendFileSync('log.txt', `${text}\n`)
}