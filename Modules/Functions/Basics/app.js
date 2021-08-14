const startGameBtn = document.getElementById('start-game-btn');

// calling start() before this declaration with throw an error
const start = function() {
    console.log('start');
}

console.log(typeof start); // this will output object

// there is no way of making a memory leak here since we only add an event listener once
startGameBtn.addEventListener('click', function() {
    console.log('start');
});