// Symbols

// library land
// create a new symbol
const uid = Symbol('uid'); // the string passed is just for logging purposes / identification
console.log(uid);

const user = {
    // id: 'p1',
    [uid]: 'p1', // the user cannot tamper with this property
    name: 'Elijah',
    age: 23,
}

// using the library
user.id = 'p2'; // ensure this isn't possible

// can be changed using user[uid] = 'p2';

console.log(user);
console.log(user[Symbol('uid')]); // will output undefined
console.log(Symbol('uid') === Symbol('uid')); // false