const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer = (duration) => {
    // this function we passed is executed right away when we create a new Promise instance
    const promise = new Promise((resolve, reject) => { // resolve and reject come from the JS engine
        setTimeout(() => {
            resolve('done!'); // resolve marks this promise object as "done"
        }, duration);
    });
    return promise;
};

const getPosition = (opts) => {
    const promise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(success => {
            resolve(success);
        }, error => {
            reject(error); // reject marks the promise as failed
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
  })
  // catches ANY errors that happen in our Promise chain PRIOR to this catch block
  // any "then" blocks are skipped when an error before a catch block occurs,
  // and JS executes whatever is in the catch block instead, BUT the next then blocks
  // will execute.
  // this allows us to structure our chain when we want certain "then" blocks to not
  // run when there is an error
  .catch(err => {
    console.log(err);
    return 'continue';
    });
  setTimer(1000).then(() => {
      console.log('timer done!');
  })
  console.log('getting position...');
}

button.addEventListener('click', trackUserHandler); 