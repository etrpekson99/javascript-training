// changes we made to the DOM are lost because these are only stored temporarily in memory

window.console.log('wow'); // works the same just as console.log()

const p = document.getElementById('welcome-text');

console.log(p.textContent) // Welcome!
console.log(p.id); // welcome-text
console.log(p.className); // text-default

p.className = 'new-class';

console.log(p.className); // new-class

const h1 = document.querySelector('h1');
console.log(h1.textContent); // Dive into the DOM

h1.textContent = "Some new text";
h1.className = "title";

// can be used to assign css styles
h1.style.color = 'red';
h1.style.backgroundColor = 'orange';

const input = document.querySelector('input');
console.dir(input);

input.setAttribute('value', 'some other default text'); // changes the value attribute

const allListItems = document.querySelectorAll('li'); // selects all elements with li tag
const allListItemsByTag = document.getElementsByTagName('li'); // gives us a live list which querySelectorAll does not

const firstLi = allListItems[0]; // selects the first li element
console.log(firstLi);

for (const listEl of allListItems) {
    console.log(listEl);
}