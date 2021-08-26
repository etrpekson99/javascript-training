const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer = (duration) => {
    // this function we passed is executed right away when we create a new Promise instance
    const promise = new Promise((resolve, reject) => { // resolve and reject come from the JS engine
        setTimeout(() => {
            resolve('done!'); // marks this promise object as resolved / "done"
        }, duration);
    });
    return promise;
};

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(posData => { 
    setTimer(2000).then(data => {
        console.log(data, posData); // this will display the text that came from our resolved promise
    }); // then executes when the promise resolves
  }, error => {
    console.log(error);
  });
  setTimer(1000).then(() => {
      console.log('timer done!');
  })
  console.log('getting position...');
}

button.addEventListener('click', trackUserHandler); 