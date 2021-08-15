// traversing the ul list items
const ul = document.querySelector('ul');
const ulChildren = ul.children; // all child element nodes (html nodes only)
console.log(ul.children[1]);

const ulChildNodes = ul.childNodes; // all child nodes (including text nodes)
console.log(ulChildNodes);

// get first list item
const ul2 = document.querySelector('ul');
const firstChild = ul.firstChild; // first child node
const firstElementChild = ul.firstElementChild; // first element child

// first child is a text node, while firstElementChild is the first li element
// this would be the same for lastChild and lastElementChild
console.log(firstChild, firstElementChild); 

const li = document.querySelector('li');

// you can only have one parent element and/or parent node
// text nodes cannot have child nodes
const parentElement = li.parentNode;
const parentNode = li.parentElement;

// accessing an ancestor
const body = li.closest('body');
console.log(body);

// accessing a sibling
const prevSibling = ul.previousSibling; // gives us the previous sibling node
const prevSiblingElement = ul.previousElementSibling; // gives us the previous sibling element node

// prevSibling will be a text node, prevSiblingElement will be the <header> element node
// the same is true for nextSibling and nextElementSibling
console.log(prevSibling, prevSiblingElement);