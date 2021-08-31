// import 'core-js';
// only import what we need
// import 'core-js/features/promise';

// these polyfills will be replaced by babel with polyfills that make
// more sense for our project
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const button = document.querySelector('button');
const textParagraph = document.querySelector('p');

button.addEventListener('click', () => {
  const text = textParagraph.textContent;
  // babel will detect that we made use of a promise
  // and will add the polyfill automatically
  const promise = new Promise();
  console.log(promise);
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  } else {
    alert('Feature not available, please copy manually!');
  }
});
