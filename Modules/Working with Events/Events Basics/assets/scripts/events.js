// with vanilla js, we should always try to avoid
// adding event listeners in the HTML code e.g. onclick
const button = document.querySelector('button');

// should always be set to a function
// button.onclick = function() {}

const buttonClickHandler = () => {
    alert('button was clicked');
};

const anotherButtonClickHandler = () => {
    console.log('this was clicked');
}

// this is better than using an attribute in HTML
// but it has one downside: we can only add one
// handler to this element
// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler; // this will overried the previous listener

// this is still the most elegant way of doing this
// allows us to add multiple event listeners to the same element
button.addEventListener('click', buttonClickHandler); 

setTimeout(() => {
    button.removeEventListener('click', buttonClickHandler);
    // a couple of pitfalls of removeEventListener:
    // - will not work if we use an anonymous function since we will
    //   use two different functions from add and remove event listener
    // - we have to make sure we store the event handler functions
    //   in constants
    // - we will again have to store the bound function in a new constant:
    //   const boundFn = buttonClickHandler.bind(this);
}, 2000)