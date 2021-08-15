const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector('section');
const button = document.querySelector('button');

section.className = 'red-bg';

// used to set new HTML elements within the element node
// section.innerHTML  = '<h2>a new title</h2>'; // this will replace all nested nodes within section

// if we want to add a new item
const list = document.querySelector('ul');
// this is bad because it re-renders everything under list, we are forcing the browser to
// parse HTML that didn't change at all
list.innerHTML = list.innerHTML + '<li>item 4</li>'; 

const div = document.querySelector('div');
// allows us to target a position and then define what HTML we want to enter
div.insertAdjacentHTML('beforeend', '<p>something wrong</p>');

button.addEventListener('click', () => {
  section.classList.toggle('invisible'); // .toggle "turns on or off" a class
});

// create a new element and append at the end of the list
// accepts at least a tag name
const newLi = document.createElement('li'); // this isn't inserted immediately into the DOM
newLi.textContent = 'item 5';
list.appendChild(newLi);

// append() allows us to add multiple nodes, simply separated by commas
// this is not supported by any version of internet explorer
list.append('some text', 'yeet', newLi);

// insert as first element
const newLi2 = document.createElement('li');
newLi2.textContent = 'item 6';
list.prepend(newLi2);

// replace an element
const newLi3 = document.createElement('li');
newLi3.textContent = 'item 7';
list.firstElementChild.replaceWith(newLi3);

// insert adjacent element
const newLi4 = document.createElement('li');
newLi4.textContent = 'item 8';
newLi.insertAdjacentElement('afterend', newLi4);

// cloning DOM nodes
// takes a boolean whether it is a deep clone, where all child and descendant elements should be cloned
const clonedLi = newLi.cloneNode(); 
clonedLi.textContent = 'cloned item';
list.append(clonedLi);

// removing elements
list.remove(); // not supported in IE

// this is supported in IE
list.parentElement.removeChild(list);