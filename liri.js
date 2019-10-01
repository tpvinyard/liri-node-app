require("dotenv").config();
let keys = require("./keys.js");
let axios = require('axios');
let Spotify = require('node-spotify-api');

// new keys
const spotify = new Spotify(keys.spotify);

const omdb = keys.omdb.key;

let command = process.argv[2];
let toSearch = process.argv.slice(3).join('+');

switch (command) {
    case 'concert-this':

    break;
    case 'spotify-this-song':
        if (toSearch) {
            spotify
                .request(`https://api.spotify.com/v1/search?q="${toSearch}"&type=track`)
                .then(function(response) {
                    console.log(response.tracks.items[0]);
                })
                .catch(function(err) {
                    console.log(err);
                })
        } else {
            spotify
                .request(`https://api.spotify.com/v1/search?q="The+Sign"+artist:"ace+of+base"&type=track`)
                .then(function(response) {
                    console.log(response.tracks.items[0]);
                })
                .catch(function(err) {
                    console.log(err);
                })
        };
    break;
    case 'movie-this':
        if (toSearch) {
            axios
                .get(`http://www.omdbapi.com/?t=${toSearch}&y=&plot=short&apikey=${omdb}`)
                .then(function(response) {
                    console.log('Title :' + response.data.Title);
                    console.log('Year of release: ' + response.data.Year);
                    console.log('IMDB Rating: ' + response.data.imdbRating);
                    console.log('Rotten Tomatoes Rating: ' + response.data.Ratings[1].Value);
                    console.log('Country of Production: ' + response.data.Country);
                    console.log('Language: ' + response.data.Language);
                    console.log('Plot: ' + response.data.Plot);
                    console.log('Actors/Actresses: ' + response.data.Actors);
                })
                .catch(function(err) {
                    console.log(err);
                })
        } else {
            axios
            .get(`http://www.omdbapi.com/?t=Mr.+Nobody,&y=&plot=short&apikey=${omdb}`)
            .then(function(response) {
                console.log('Title :' + response.data.Title);
                console.log('Year of release: ' + response.data.Year);
                console.log('IMDB Rating: ' + response.data.imdbRating);
                console.log('Rotten Tomatoes Rating: ' + response.data.Ratings[1].Value);
                console.log('Country of Production: ' + response.data.Country);
                console.log('Language: ' + response.data.Language);
                console.log('Plot: ' + response.data.Plot);
                console.log('Actors/Actresses: ' + response.data.Actors);
            })
            .catch(function(err) {
                console.log(err);
            })
        }
    break;
    case 'do-what-it-says':

    break;
    default:
        console.log("Please enter a valid search term ('concert-this', 'spotify-this-song', 'movie-this', 'do-what-it-says'): \n");
}