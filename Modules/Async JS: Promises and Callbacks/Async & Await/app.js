// async / await still utilizes Promises

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

// async / await does NOT transform the way JS executes
// it would still execute the same way when we would use a normal Promise instance
async function trackUserHandler() { // with async added, the function now automatically returns a Promise
    let posData;
    let timerData;
    try {
        // waits for this Promise to resolve, only then will the next line execute
        // also returns what the Promise resolves
        posData = await getPosition(); // we do NOT block code execution with async / await
        timerData = await setTimer(2000);
    } catch(error) {
        console.log(error);
    }
    console.log(timerData, posData); // this line will always run after try-catch
}

button.addEventListener('click', trackUserHandler); 