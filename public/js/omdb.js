const API_KEY = '30f3ba26';
const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=30f3ba26';

const findBtn = document.querySelector('#find');
const findElement = document.querySelector('#findInput');

const searchBtn = document.querySelector('#search');
const searchElement = document.querySelector('#searchInput');

const mediaDiv = document.querySelector('#media');




// Searches for a specific film from OMDB
findBtn.onclick = function(event) {
  event.preventDefault() // Stop page from reloading
  const value = findElement.value;

  const newUrl = url + '&t=' + value;

  // fetch(newUrl)
  // .then((res) => res.json())
  // .then((data) => {
  //   console.log('Data: ', data);


  //   const movieDisp = createPosterList(data);
  //   // const movieDisp = `<img src=${data.Poster}/> `;
  //   // mediaDiv.appendChild(movieDisp);
  //   mediaDiv.innerHTML = movieDisp;
  // })
  // .catch((error) => {
  //   console.log('Error: ', error);
  // })
  


  // console.log(newUrl);
}


// searchBtn.onclick = function(event) {
//   event.preventDefault() // Stop page from reloading
//   const value = searchElement.value;

//   const newUrl = url + '&s=' + value;

//   fetch(newUrl)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log('Data: ', data);


//     const movieDisp = createPosterList(data);
//     // const movieDisp = `<img src=${data.Poster}/> `;
//     mediaDiv.appendChild(movieDisp);
//     // mediaDiv.innerHTML = movieDisp;
//   })
//   .catch((error) => {
//     console.log('Error: ', error);
//   })

//   // console.log(newUrl);
// }

searchBtn.onclick = function(event) {
  event.preventDefault() // Stop page from reloading
  const value = searchElement.value;

  const movieDisp = createMovieSearchable(jsonData);
  mediaDiv.appendChild(movieDisp);

}

document.onclick = function(event) {
  const target = event.target;
  if(target.tagName.toLowerCase() === 'img') {
    // console.log('hello movie');
    // console.log(target.getAttribute('alt'));
    const section = target.parentElement; // Section
    const content = section.nextElementSibling; // Content
    // content.innerHTML = showMedia(target.getAttribute('alt'));
    content.innerHTML = '<p>CLICKED!</p>';
  }
}

function showMedia(title) {
  // const content = document.querySelector('#content');
  // content.innerHTML = `<p>clicked</p>`;
  return '<p>clicked!</p>';
}
  
// Creates entire movie section
function createMovieSearchable(data) {
  const tempDiv = document.createElement('div');
  tempDiv.setAttribute('class', 'movie');

  tempDiv.appendChild(createMovieSection(data));

  const content = document.createElement('div');
  content.setAttribute('class', 'content');
  tempDiv.appendChild(content);

  return tempDiv;
}

// Creates the poster row section
function createMovieSection (data) {
  const movies = data.Search;
  const section = document.createElement('section');
  section.setAttribute('class', 'section');

  for(let i = 0; i < movies.length; i++) {
    const { Title, Poster } = movies[i];

    if(Poster) {
      const img = document.createElement('img');
      img.setAttribute('src', `${Poster}`);
      img.setAttribute('alt', `${Title}`);

      section.appendChild(img);
    }

  }
  return section;
}









function testDial(title) {
  const tempDiv = document.createElement('div');
  tempDiv.setAttribute('class', 'movieName');
  const info = `<p>${title}</p>`;
  tempDiv.innerHTML = info;

  return tempDiv;
} 

// Create movie list
function createPosterList(data) {
  const movies = data.Search;
  const section = document.createElement('section');
  section.setAttribute('class', 'section');

  for(let i = 0; i < movies.length; i++) {
    const { Title } = movies[i];

    if(Title) {
      const info = testDial(Title);
      section.appendChild(info);
    }

  }
  return section;
}

const jsonData = JSON.parse('{"Search":[{"Title":"Jaws","Year":"1975","imdbID":"tt0073195","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Jaws 2","Year":"1978","imdbID":"tt0077766","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BN2U1MWE1NTMtYjQ2ZC00MTFmLWFmYjItODMyNGYxOTAyZmEzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Jaws: The Revenge","Year":"1987","imdbID":"tt0093300","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNGI1MTAxMWItOTE0OC00ZDhkLWE3Y2EtNjFiZmQ4NjQ1NGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Jaws 3","Year":"1983","imdbID":"tt0085750","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BM2QwYjhiMzQtN2RiYS00MzgxLThmNzItMmJlNmMyMmQyYTA3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Jaws 19","Year":"2015","imdbID":"tt5033000","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZjRmMzYzMTctZmE5MC00NWZjLTk5YmItYjQ1YTljMDdlYWYxXkEyXkFqcGdeQXVyNDcwNDE0Nzk@._V1_SX300.jpg"},{"Title":"Cruel Jaws","Year":"1995","imdbID":"tt0112747","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYTgxN2I4ZjEtMjAyZS00MzM5LWE0MjAtZmQ4M2UyMjgwODcwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Santa Jaws","Year":"2018","imdbID":"tt8305692","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZjdmZjQ2ODktMzUwYy00MWRlLThiZWYtMzFkODBlN2I1OWZhXkEyXkFqcGdeQXVyMzQ5OTc2Mzk@._V1_SX300.jpg"},{"Title":"In the Jaws of Life","Year":"1984","imdbID":"tt0088312","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTIzNjU2ODUwOV5BMl5BanBnXkFtZTYwMzc2MDg4._V1_SX300.jpg"},{"Title":"Jaws of Satan","Year":"1981","imdbID":"tt0082580","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTUyOTY4Mzc0N15BMl5BanBnXkFtZTcwNTY2NjE2NA@@._V1_SX300.jpg"},{"Title":"The Making of Jaws","Year":"1995","imdbID":"tt0251821","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZjkxNTBmZDgtOGUwZS00N2IwLThiMTYtYzljYmU5NzE1MGQyXkEyXkFqcGdeQXVyNTUyNzA5ODE@._V1_SX300.jpg"}],"totalResults":"103","Response":"True"}');