const addListenerBtn = document.getElementById('add-listener-btn');
const clickableBtn = document.getElementById('clickable-btn');
const messageInput = document.getElementById('click-message-input');

let person = {
  name: 'Max'
};

person = null; // this "triggers" garbage collection because the object above is no longer used, since there is no longer an address pointed to it

function printMessage() {
  const value = messageInput.value;
  console.log(value || 'Clicked me!');
}

// JS replaces the old function in the listener and adds a new one
function addListener() {
  clickableBtn.addEventListener('click', printMessage);
}

// the code below introduces memory leaks since we are creating a new function every time add a listener
function addListenerWithMemoryLeak() {
  clickableBtn.addEventListener('click', function () { // JS creates a new object since JS does not see that this is a new function
    const value = messageInput.value;
    console.log(value || 'Clicked me!');
  });
}

addListenerBtn.addEventListener('click', addListener);