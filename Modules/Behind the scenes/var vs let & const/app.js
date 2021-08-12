'use strict'; // will disabled the "forgiving" nature of JS

var name = 'Max';
var name = 'Anna'; // this will not throw an error

if (name === 'Anna') {
    var hobbies = ['sports', 'cooking']; // this is treated as a normal global variable since it's not decalred in a function
    let otherHobbies = ['sports', 'cooking'];
    console.log(hobbies, otherHobbies);
}

function greet() {
    var age = 30;
    var name = 'Manuel';
    console.log(name, 30); // Manuel, 30
}

console.log(name); // Max

console.log(hobbies);

greet();

// console.log(otherHobbies); // this will not work

// HOISTING
console.log(userName); // this will be undefined

var userName = 'Max';

// this code will throw an error
// console.log(user);

// let user = 'Elijah';

// strict mode will disable features like the next code block
// anotherUser = 'Max'; // will be initialized as var by default
// console.log(anotherUser); // this will work but it's not GOOD

// var undefined = 5; // this will work WITHOUT strict mode