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

const getPosition = (opts) => {
    const promise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(success => {
            resolve(success);
        }, error => {

        }, opts);
    });
    return promise;
}

function trackUserHandler() {
  let positionData;
  getPosition()
  .then(posData => {
      positionData = posData;
      return setTimer(); // we now wait for this promise to resolve
  })
  .then(data => {
      console.log(data, positionData);
  });
  setTimer(1000).then(() => {
      console.log('timer done!');
  })
  console.log('getting position...');
}

button.addEventListener('click', trackUserHandler); 