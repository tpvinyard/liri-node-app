# liri-node-app

## Overview

The application's purpose is to give the user access to three well known APIs  (Spotify API, Bands In Town API, and OMDB API) through the command line. This program was written with JavaScript and Node.js. Please follow the instructions below in order to have this program run in your local terminal. Thanks!

## Instructions (via the terminal)
1. Initialize LIRI by cloning this repository
2. Create Spotify Developer API Key at https://developer.spotify.com
3. Run `npm -v` and `node -v` to verify installation
4. In created directory, run `npm install` in order to install necessary node packages
5. Create file `.env` in this directory. Add
	`SPOTIFY_ID=Your_Spotify_ID`
	`SPOTIFY_SECRET=Your_Spotify_Secret`
	to the file
6. Now you are ready to take full advantage of LIRI. From the terminal you have access to the three APIs as follows.
7. Bands In Town API: `node liri.js concert-this <name-of-band/artist>`
		Insert GIF here
8. Spotify API: `node liri.js spotify-this-song <name-of-song>`
		Insert GIF here 
9. OMDB API: `node liri.js movie-this <name-of-movie>`
		Insert GIF here
10. Other functionality: 
	* `node liri.js do-what-it-says` will take whatever is written in the random.txt file and read/run it
	* check the `log.txt` file for a log of each item that has been returned to the console
	* each function has a default search that will occur if the user does not provide a search term 


Everything is written and maintained by me (tpvinyard). Please reach out to me if you have any questions or concerns. Thanks!

