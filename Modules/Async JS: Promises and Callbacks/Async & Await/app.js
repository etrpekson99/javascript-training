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

    // these two are not immediately executed because behind the scenes,
    // these have their own "then" blocks as well
    setTimer(1000).then(() => {
        console.log('timer done!');
    });
    console.log('getting position');
}

button.addEventListener('click', trackUserHandler); 

// one disadvantage of async / await is that we can't run tasks simultaneously inside of the same function
// and don't want to execute things one after the other

// async / await is only available in functions

// ------------------------------------------------------------------------------------------------------------------------

// execute the one that is faster
Promise.race([ // all promises are executed at the same time
    getPosition(),
    setTimer(1000)
]).then((data) => {
    console.log(data);
}); // returns a Promise with the result of the FASTEST promise we pass to it

// only execute after a couple of Promises have finished
// if one of the Promises fail, this is canceled
// it's either ALL resolved or ONE rejected
Promise.all([
    getPosition(),
    setTimer(1000),
]).then(promiseData => {
    console.log({ promiseData }); // [Position, "done!"]
}); // the data we get as a result will be the COMBINED resolved data of all our other Promises

Promise.allSettled([
    getPosition(),
    setTimer(1000),
]).then(promiseData => {
    console.log({ promiseData }); // we can see which Promise fails and which one succeeded
}); // returns the different outputs of all the settled promises, whether it's resolved or rejected
