// with vanilla js, we should always try to avoid
// adding event listeners in the HTML code e.g. onclick
const buttons = document.querySelectorAll('button');

// should always be set to a function
// button.onclick = function() {}

const buttonClickHandler = event => {
    // event.target.disabled = true;
    console.log(event);
};

const anotherButtonClickHandler = () => {
    console.log('this was clicked');
}

// this is still the most elegant way of doing this
// allows us to add multiple event listeners to the same element
// button.addEventListener('click', buttonClickHandler); 

// buttons.forEach(button => button.addEventListener('mouseenter', buttonClickHandler));

const form = document.querySelector('form');
// only form elements can have submit
form.addEventListener('submit', event => {
    // this exists on any event in JS
    // this prevents the default behavior the browser would apply otherwise
    // the default behavior of submit form is taking the form
    // data and submitting it to the server
    event.preventDefault();
    console.log(event);
})