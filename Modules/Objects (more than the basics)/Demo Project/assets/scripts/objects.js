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

      if ('info' in movie) {
         // check if movie has an 'info' property, this is equivalent to movie.info === undefined
         console.log('info in movie');
      }

      const { info, ...others } = movie;
      console.log(others); // will output an object with only the id key

      const { title: movieTitle } = info; // assigning a new name to the extracted property
      const { getFormattedTitle } = movie; // "this" here refers to the global execution object, unless we use bind

      let { getTitle } = movie;
      // we pass the first argument as what we want "this" to refer to
      // inside of the getTitle function
      //   getTitle = getTitle.bind(movie); // when getTitle executes, "this" should refer to the movie object

      // the easiest way to remember what "this" is is whichever comes
      // before the dot notation calling the function
      // in this case, it's movie
      let text = `${getTitle.call(movie)} - `; // call() immediately executed the function, but allows us to change what "this" refers to as well
      let otherText = `${getTitle.apply(movie, [])} - `; // apply() does the same thing, but it allows us pass additional arguments but as an array
      for (const key in info) {
         if (key !== 'title' && key !== '_title') {
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

   if (extraName.trim() === '' || extraValue === '') {
      return;
   }

   // using the shorthand property syntax
   const newMovie = {
      info: {
         set title(value) {
            // if we do not add a setter, the value is read-only
            if (value.trim() === '') {
               this._title = 'default';
               return;
            }
            this._title = value;
         },
         get title() {
            // if we do not add a getter, the value is write-only
            return this._title;
         },
         [extraName]: extraValue,
      },
      id: Math.random().toString(), // everything in JS has a toString() method
      getFormattedTitle: function () {
         // this will always refer to whatever CALLED the function, or whatever is responsible for executing the function
         // "look at the thing which is responsible for executing the function, in this case it's newMovie"
         return this.info.title.toUpperCase();
      },
      // another way of defining a method / adding a method to an object:
      getTitle() {
         return this.info.title.toUpperCase();
      },
   };

   newMovie.info.title = title; // setter is triggered when we assign a value to the property
   console.log(newMovie.info.title); // getter is executed when we try to access the property

   movies.push(newMovie);
   renderMovies();
};

const searchMovieHandler = function () {
   console.log(this); // "this" will refer to the button IF we DO NOT use an arrow function
   const filterTerm = document.getElementById('filter-title').value;
   renderMovies(filterTerm);
};

const searchMovieHandler2 = () => {
   // "this" will refer to the Window because ARROW FUNCTIONS do not automatically bind "this" to anything
   // "this" will refer to the same thing outside of the function
   console.log(this);
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

// ----------------------------------------------------------------------------------------------------------------
// difference between call() and apply()
// call() and apply() immediately execute the function, whilst letting us specify what "this" is in the function
// the difference is:
// for call(), we can pass a list as additional arguments for the function
// for apply(), we must pass an array and only an array as the additional argument to the function

// ----------------------------------------------------------------------------------------------------------------
// how arrow functions can be useful with regard to "this"
const members = {
   teamName: 'spurs',
   people: ['Max', 'Manuel'],
   getTeamMembers() {
      this.people.forEach((p) => {
         // If we used function(), "this" will be bound to the Window object, because we
         // defined this new function in forEach, which is triggered by the Window.
         // That wouldn't be the case here since we used an arrow function. Therefore,
         // "this" keeps its binding from outside the function, in this case
         // outside the function would be the members object
         console.log(p + ' ' + this.teamName);
      });
   },
};
members.getTeamMembers();
