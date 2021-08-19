const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
   const movieList = document.getElementById('movie-list');

   if (movies.length === 0) {
      movieList.classList.remove('visible');
      return;
   } else {
      movieList.classList.add('visible');
   }

   // this is not ideal
   movieList.innerHTML = '';

   // the includes function does work on strings
   const filteredMovies = !filter
      ? movies
      : movies.filter((movie) => movie.info.title.includes(filter));

   filteredMovies.forEach((movie) => {
      const movieEl = document.createElement('li');
      let text = `${movie.info.title} - `;
      for (const key in movie.info) {
         if (key !== 'title') {
            text += `${key}: ${movie.info[key]}`;
         }
      }
      movieEl.textContent = text;
      movieList.append(movieEl);
   });
};

const addMovieHandler = () => {
   const title = document.getElementById('title').value;
   const extraName = document.getElementById('extra-name').value;
   const extraValue = document.getElementById('extra-value').value;

   if (title.trim() === '' || extraName.trim() === '' || extraValue === '') {
      return;
   }

   // using the shorthand property syntax
   const newMovie = {
      info: {
         title,
         [extraName]: extraValue,
      },
      id: Math.random().toString(), // everything in JS has a toString() method
   };

   movies.push(newMovie);
   renderMovies();
};

const searchMovieHandler = () => {
   const filterTerm = document.getElementById('filter-title').value;
   renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);

// ----------------------------------------------------------------------------------------------------------------
// the spread operator on objects
const person = { name: 'Elijah', hobbies: ['Coding'] };
const anotherPerson = { ...person };
anotherPerson.age = 30;
console.log(person.age); // this will be undefined

const person3 = { ...anotherPerson, age: 20 }; // override age