const movieList = document.getElementById('movie-list');

const person = {
    name:  'Elijah',
    age: 23,
    hobbies: ['Coding', 'Cooking'],
    greet: function() {
        console.log('hi there');
    },
    1.5: 'Hello', //behind the scenes, this is coerced to a string
};

// adding, modifying, and deleting properties
console.log(person.isAdmin) // undefined
person.isAdmin = true;
console.log(person.isAdmin) // true

person.age = 30;
console.log(person.age); // 30

delete person.age; // also equivalent to person.age = undefined, but we must never assign undefined to a value
console.log(person.age); // undefined

person.age = null; // this does NOT delete the age, you just set the property's value to null
console.log(person.age); // null, and the age property is in the person object

// --------------------------------------------------------------------------------------------------------------------------------------------------------
// special key names and square bracket property access
// JS coerces keys into strings
// therefore we can use strings as keys
const anotherPerson = {
    'first-name': 'Elijah',
    age: 23,
    hobbies: ['Coding', 'Cooking'],
    greet: function() {
        console.log('hi there');
    }
}

// this is called the square bracket notation, this is available on any object
// square bracket notations will accept constants with values that correspond to a key
console.log(anotherPerson['first-name']); // Elijah
movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

// --------------------------------------------------------------------------------------------------------------------------------------------------------
// property types and property order
// negative numbers cannot be object keys
// dot notation will not work for any kind of number
console.log(person[1.5]);
// the key-value pairs are ordered based on where they are inserted by us
// if we have an object that consists only of number keys, they will be sorted as numbers

// --------------------------------------------------------------------------------------------------------------------------------------------------------
// dynamic property access and setting properties dynamically
const keyName = 'first-name';
console.log(anotherPerson[keyName]); // Elijah

// dynamically set properties with the square bracket notation
const userChosenKeyName = 'level';
const oneMorePerson = {
    'first-name': 'Elijah',
    [userChosenKeyName]: '...',
    age: 23,
    hobbies: ['Coding', 'Cooking'],
    greet: function() {
        console.log('hi there');
    }
}