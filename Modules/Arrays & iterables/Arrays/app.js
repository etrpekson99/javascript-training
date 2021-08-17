const numbers = [1, 2, 3];

// using a constructor function
const moreNumbers = new Array('hi', 'welcome');
console.log(moreNumbers); // ['hi', 'welcome']

const anotherArray = new Array(5);
console.log(anotherArray); // [empty x 5] meaning this is an empty array with a fixed length

const emptyArray = Array(5);
console.log(emptyArray); // [empty x 5] meaning this is an empty array with a fixed length

const yetAnotherArray = Array.of(1, 2);
console.log(yetAnotherArray); // [1, 2]

const oneMoreArray = Array.from('hi'); // accepts an ITERABLE or array-like object then converts it to an array
console.log(oneMoreArray); // ['h', 'i'];

const listItems = document.querySelectorAll('li');
const arrayListItems = Array.from(listItems);
console.log(listItems);

// what can we store in array? basically anything
const hobbies = ['cooking', 'eating'];
const personalData = [30, 'Max', { more: [] }];
const analyticsData = [[1, 2], [3, 4], [5, 6]];