const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer = (duration) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done!');
        }, duration);
    });
    return promise;
};

const getPosition = (opts) => {
    const promise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(success => {
            resolve(success);
        }, error => {
            reject(error);
        }, opts);
    });
    return promise;
}

function trackUserHandler() {
  let positionData;
  getPosition()
  .then(posData => {
      positionData = posData;
      return setTimer();
  })
  .then(data => {
      console.log(data, positionData);
  })
  .catch(err => {
    console.log(err);
    return 'continue';
    });
}

button.addEventListener('click', trackUserHandler); 