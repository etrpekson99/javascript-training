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

// allows us to add multiple event listeners to the same element
button.addEventListener(); 

// button.removeEventListener();