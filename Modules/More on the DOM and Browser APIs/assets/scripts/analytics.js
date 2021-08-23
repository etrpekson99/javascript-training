const intervalId = setInterval(() => {
    console.log('sending analytics data');
}, 2000); // the time we set here (x) means the function we pass will execute every x number of seconds

document.getElementById('stop-interval-btn').addEventListener('click', () => {
    clearInterval(intervalId);
});