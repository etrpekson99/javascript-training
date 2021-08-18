const movieList = document.getElementById('movie-list');

const person = {
    name:  'Elijah',
    age: 23,
    hobbies: ['Coding', 'Cooking'],
    greet: function() {
        console.log('hi there');
    }
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