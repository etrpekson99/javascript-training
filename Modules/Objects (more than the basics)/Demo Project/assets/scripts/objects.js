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

      if ('info' in movie) { // check if movie has an 'info' property, this is equivalent to movie.info === undefined
        console.log('info in movie')
      }

      const { info, ...others } = movie;
      console.log(others); // will output an object with only the id key
      
      const { title: movieTitle } = info; // assigning a new name to the extracted property
      const { getFormattedTitle } = movie; // "this" here refers to the global execution object, unless we use bind
      
      let { getTitle } = movie;
      // we pass the first argument as what we want "this" to refer to
      // inside of the getTitle function
      getTitle = getTitle.bind(movie); // when getTitle executes, "this" should refer to the movie object
      
      // the easiest way to remember what "this" is is whichever comes
      // before the dot notation calling the function
      // in this case, it's movie
      let text = `${movie.getFormattedTitle()} - `;
      for (const key in info) {
         if (key !== 'title') {
            text += `${key}: ${info[key]}`;
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
      getFormattedTitle: function() {
          // this will always refer to whatever CALLED the function, or whatever is responsible for executing the function
          // "look at the thing which is responsible for executing the function, in this case it's newMovie"
          return this.info.title.toUpperCase();
      },
      // another way of defining a method / adding a method to an object:
      getTitle() {
        return this.info.title.toUpperCase();
      }
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

// ----------------------------------------------------------------------------------------------------------------
// understanding Object.assign()
const newPerson = { name: 'Elai' };
// Object.assign will return the new object where it has merged all the
// arguments we passed into it.
// We can also pass in existing objects.
const newPerson2 = Object.assign({}, newPerson);
