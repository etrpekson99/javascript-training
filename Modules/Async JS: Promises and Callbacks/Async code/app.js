const button = document.querySelector('button');
const output = document.querySelector('p');

// this function is only executed when the for-loop below is finished
function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(posData => { // these functions are handed off to the browser
    setTimeout(() => {
      console.log(posData);
    }, 2000);
  }, error => {
    console.log(error);
  });
  setTimeout(() => {
    console.log('timer done'); // getting position will run first because this is always added to the message queue first
  }, 0); // zero is the minimum time after which the callback function would be executed, not the guaranteed time
  console.log('getting position...'); // this goes into the call stack first
}

// when we call this line, we're telling the browser to setup
// an event listener and JS is done with it until the event is fired
button.addEventListener('click', trackUserHandler); // trackUserHandler is the function that fires when the click occurs

// ------------------------------------------------------------------------------

// blocking code and the "event loop"

let result = 0;
// all clicks are processed only when the loop is done
// JS is blocked until this code is done.
// this occupies the call stack, therefore the function
// attached to the event above does not fire immediately
for(let i = 0; i < 100; i++) {
  result += i;
}

console.log(result);

// ------------------------------------------------------------------------------