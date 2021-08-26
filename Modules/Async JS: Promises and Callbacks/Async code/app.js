const button = document.querySelector('button');
const output = document.querySelector('p');

// this function is only executed when the for-loop below is finished
function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(posData => { // these functions are handed off to the browser
    console.log(posData);
  }, error => {
    console.log(error);
  });
  console.log('getting position...'); // this goes into the call stack first
}

// when we call this line, we're telling the browser to setup
// an event listener and JS is done with it until the event is fired
button.addEventListener('click', trackUserHandler); // trackUserHandler is the function that fires when the click occurs

// ------------------------------------------------------------------------------

// blocking code and the "event loop"

// let result = 0;
// all clicks are processed only when the loop is done
// JS is blocked until this code is done.
// this occupies the call stack, therefore the function
// attached to the event above does not fire immediately
// for(let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);

// ------------------------------------------------------------------------------