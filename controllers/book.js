const Movie = require('../models/movie');

exports.getIndex = (req, res, next) => {

  //fetchAll uses a callback function to to return data
  //Render function is passed as 'cb' to be executed
  //after fetchAll completes.
  Movie.fetchAll(movies => { 
      res.render('book/index', {
          movieData: movies, 
          pageTitle: 'Library',  
          path: '/'
      }); 
  });
};