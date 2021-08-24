// with vanilla js, we should always try to avoid
// adding event listeners in the HTML code e.g. onclick
const button = document.querySelector('button');
const div = document.querySelector('div');

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

// ----------------------------------------------------------------------------------------

const form = document.querySelector('form');
// only form elements can have submit
form.addEventListener('submit', event => {
    // this exists on any event in JS
    // this prevents the default behavior the browser would apply otherwise
    // the default behavior of submit form is taking the form
    // data and submitting it to the server
    event.preventDefault();
    console.log(event);
});

// ----------------------------------------------------------------------------------------

// bubbling and capturing
// browser checks if there's an event listener for ancestor element
// and executes that as well
div.addEventListener('click', () => {
    console.log('div');
}, true); // true -> this event listener should be part of the capturing phase, therefore this will run first

// propagation, this means the event does not only happen on the
// element itself, but also to the ancestors, allowing us to listen
// to the same event on the ancestors because it "bubbles" / "propagates" up
button.addEventListener('click', (event) => {
    // this means any other listeners any other event on some
    // ancestor elements will NOT trigger their event listeners
    // for this event
    event.stopPropagation(); 

    // this means any other listeners on the 
    // same element won't run anymore
    event.stopImmediatePropagation(); 
    console.log('btn');
});

// ----------------------------------------------------------------------------------------

const listItems = document.querySelectorAll('li');
// listItems.forEach(listItem => {
//     listItem.addEventListener('click', event => {
//         event.target.classList.toggle('highlight');
//     })
// })

// instead of adding event listeners to each item,
// we use this "delegate" pattern that takes advantage of
// event propagation
const list = document.getElementById('ul-1');
list.addEventListener('click', event => {
    // event.target will still refer to the actual target we clicked, the lowest DOM element
    event.target.classList.toggle('highlight');
});

const list2 = document.getElementById('ul-2');
list2.addEventListener('click', event => {
    console.log(event.currentTarget); // currentTarget is the element where we actually added the listener
    event.target.closest('li').classList.toggle('highlight');

    // if we trigger a form submission programmatically,
    // the event listener is skipped, unlike when we do it with button.click()
    // form.submit();
});

// ----------------------------------------------------------------------------------------

