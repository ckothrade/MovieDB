const Movie = require('../models/movie'); 

exports.getAddMovie = (req, res, next) => {  
  res.render('admin/edit-movie', {
      pageTitle: 'Add Movie', 
      path: '/admin/add-movie',
      editing: false
  });
};

exports.postAddMovie = (req, res, next) => {
  const title = req.body.title;
  const year = req.body.year;
  //const imageUrl = req.body.imageUrl;

  const movie = new Movie(null, title, year); // creates new movie object
  movie.save(); // saves movie to the array
  res.redirect('/'); // Allows request to move to next middleware    
};

/* Finds a movie on the OMDB database using the 't' parameter */
exports.getFindMovie = (req, res, next) => {  
  res.render('admin/find-movie', {
      pageTitle: 'Find Movie', 
      path: '/admin/find-online'
  });
};