const headerAddMovieBtn = document.getElementById('header-add-movie-btn');
const addMovieModal = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieBtn = document.getElementById('cancel-add-movie-btn');
const addMovieBtn = document.getElementById('add-movie-btn');
const entrySection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

const movieList = document.getElementById('movie-list');
const userInputs = addMovieModal.querySelectorAll('input');

const movies = [];

const updateUI = () => {
   if (movies.length === 0) {
      entrySection.style.display = 'block';
   } else {
      entrySection.style.display = 'none';
   }
};

const deleteMovie = (movieId) => {
   let movieIndex = 0;
   for (const movie of movies) {
      if (movie.id === movieId) {
         break;
      }
      movieIndex++;
   }
   movies.splice(movieIndex, 1);
   const listRoot = document.getElementById('movie-list');
   listRoot.children[movieIndex].remove();
   // listRoot.removeChild(listRoot.children[movieIndex]);
   closeMovieDeletionModal();
   updateUI();
};

const closeMovieDeletionModal = () => {
   toggleBackdrop();
   deleteMovieModal.classList.remove('visible');
};

const deleteMovieHandler = (movieId) => {
   deleteMovieModal.classList.add('visible');
   toggleBackdrop();
   const cancelDeletionBtn = deleteMovieModal.querySelector('.btn--passive');
   let confirmDeletionBtn = deleteMovieModal.querySelector('.btn--danger');

   confirmDeletionBtn.replaceWith(confirmDeletionBtn.cloneNode(true));
   confirmDeletionBtn = deleteMovieModal.querySelector('.btn--danger');

   cancelDeletionBtn.removeEventListener('click', closeMovieDeletionModal);
   cancelDeletionBtn.addEventListener('click', closeMovieDeletionModal);

   confirmDeletionBtn.addEventListener(
      'click',
      deleteMovie.bind(null, movieId)
   );
};

const closeMovieModal = () => {
   addMovieModal.classList.remove('visible');
};

const renderNewMovieElement = (id, title, url, rating) => {
   const newMovieElement = document.createElement('li'); // we are instering it in an li
   newMovieElement.className = 'movie-element';
   newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${url}" alt="${title}" />
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating} / 5 stars</p>
        </div>
    `;
   newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
   movieList.append(newMovieElement);
};

const showMovieModal = () => {
   addMovieModal.classList.toggle('visible');
   toggleBackdrop();
};

const toggleBackdrop = () => {
   backdrop.classList.toggle('visible');
};

const clearMovieInputs = () => {
   for (const input of userInputs) {
      input.value = '';
   }
};

const addMovieHandler = () => {
   const title = userInputs[0].value;
   const image = userInputs[1].value;
   const rating = userInputs[2].value;
   // .trim removes excess whitespace
   if (
      title.trim() === '' ||
      image.trim() === '' ||
      rating.trim() === '' ||
      +rating < 1 ||
      +rating > 5
   ) {
      alert('please enter valid values (rating between 1 and 5)');
   }

   const newMovie = {
      id: Math.random().toString(),
      title,
      image,
      rating,
   };
   movies.push(newMovie);
   closeMovieModal();
   toggleBackdrop();
   clearMovieInputs();
   renderNewMovieElement(
      newMovie.id,
      newMovie.title,
      newMovie.image,
      newMovie.rating
   );
   updateUI();
};

const cancelAddMovieHandler = () => {
   toggleBackdrop();
   closeMovieModal();
   clearMovieInputs();
};

const backdropClickHandler = () => {
   closeMovieModal();
   closeMovieDeletionModal();
   clearMovieInputs();
};

headerAddMovieBtn.addEventListener('click', showMovieModal);
cancelAddMovieBtn.addEventListener('click', cancelAddMovieHandler);
backdrop.addEventListener('click', backdropClickHandler);
addMovieBtn.addEventListener('click', addMovieHandler);
