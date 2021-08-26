const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  console.log('Clicked!');
}

// when we call this line, we're telling the browser to setup
// an event listener and JS is done with it until the event is fired
button.addEventListener('click', trackUserHandler);