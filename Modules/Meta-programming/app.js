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
    [Symbol.toStringTag]: 'User', // allows us to "tweak" the output of the toString() method
}

// using the library
user.id = 'p2'; // ensure this isn't possible

// can be changed using user[uid] = 'p2';

console.log(user);
console.log(user[Symbol('uid')]); // will output undefined
console.log(Symbol('uid') === Symbol('uid')); // false

// ----------------------------------------------------------------

// (some) well-known symbols
console.log(user.toString()); // [object User]

// ----------------------------------------------------------------
// iterators

const company = {
    currEmployee: 0,
    employees: ['Eli', 'Raph', 'EJ'],
    next() {
        if (this.currEmployee >= this.employees.length) {
            return { value: this.currEmployee, done: true };
        }
        const returnValue = { value: this.employees[this.currEmployee], done: false };
        this.currEmployee++;
        return returnValue;
    }
};

// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next()); // we "exhaust" a list of data until it is "done"

let employee = company.next();

while(!employee.done) {
    console.log(employee.value);
    employee = company.next();
}