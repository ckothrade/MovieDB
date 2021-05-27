const fs = require('fs');
const path = require('path');

// const { v4: uuidV4 } = require("uuid");

const rootDir = require('../util/path');

const p = path.join(rootDir, 'data', 'movies.json'); // create path as global variable

//const Cart = require('./cart');

// Retrieves data from file 
const getMoviesFromFile = (callback) => {

        fs.readFile(p, (err, fileContent) => {

            if(err){
                return callback([]); // return empty array if file is empty
            }

            callback(JSON.parse(fileContent)); // return data from file parsed as array
        });
}

// function createArray(data, len) {
//     const array = [];

//     // Only use length limit passed if data array is greater than the limit
//     // let length = (data.length < len) ? data.length : len;
    

//     return array;
// }

module.exports = class Movie {

    constructor(id, title, year, genre, rating, director, actors, production, 
        plot, imdbID, imdbScore, poster) {

        this.id = id;
        this.title = title;
        this.year = year;
        this.genre = genre
            .trim() // remove white space
            .split(",", 2) // set separator & data size
            .map(item => item.trim()) // remove elements white space
            .filter(item => item !== ''); // removes error elements from extra commas
        this.rating = rating;
        this.director = director;
        this.actors = actors
            .trim() 
            .split(",", 3)
            .map(item => item.trim())
            .filter(item => item !== '');
        this.production = production;
        this.plot = plot;
        this.imdbID = imdbID;
        this.imdbScore = imdbScore;
        this.poster = poster;
        this.uploadDate = Date.now();
    }

    save() {

        // Calls method to read data from file.
        // Passes an anonymous function as a callback to 
        // execute after file is read.
        getMoviesFromFile(movies => {

            // If the movie we're saving already is created and has an ID
            if(this.id) {
                // Search the array of Posts returned for matching movie
                const existingMovieIndex = movies.findIndex(movie => movie.id === this.id);

                const updatedMovies = [...movies];
                updatedMovies[existingMovieIndex] = this; // replaces movie with update

                // write new array back to file
                fs.writeFile(p, JSON.stringify(updatedMovies), (err) => {
                    console.log(err);
                });

            } else {
                // If we're adding a new movie

                // temp id generator (for uniqueness, use uuidV4!!!)
                this.id = Math.floor(Math.random() * 1000 * Date.now()).toString();

                movies.push(this); // save new movie to array

                // write new array back to file
                fs.writeFile(p, JSON.stringify(movies), (err) => {
                    console.log(err);
                });
            }
        });
    }

    // Static modifier allows us to call the method 
    // on the class and not an instantiated object
    static deleteById(id) {
        getPostsFromFile(movies => {
            // Returns an array of movies minus the one we wish to delete
            const updatedMovies = movies.filter(m => m.id !== id);
            const movie = movies.find(movie => movie.id === id);
            fs.writeFile(p, JSON.stringify(updatedMovies), err => {
                if(!err) {
                    // removes from cart
                    Cart.deletePost(id, movie.time);
                }
            });
        });
    }

    static fetchAll(callback) {
        getMoviesFromFile(callback);
    }

    static findById(id, callback) {
        getMoviesFromFile(movies => {
            const movie = movies.find(m => m.id === id);
            callback(movie);
        });
    }
};
