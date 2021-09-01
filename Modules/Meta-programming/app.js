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
    },
    // JS is not looking for a next method when we run a for-of loop
    // instead what it is looking for is a special Symbol
    // * turns the function into a generator
    [Symbol.iterator]: function* employeeGenerator() {
        let currentEmployee = 0;
        while(currentEmployee < this.employees.length) {
            // yield is a bit like return
            // yield defines the return value of every call to the next() method
            // that is created in the iterator that's a result of this generator function
            // yield saves the current state of execution, and then the next time the "next"
            // method is called, it "remembers" the previous state and iterates accordingly
            yield this.employees[currentEmployee];
            currentEmployee++;
        }
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

// ----------------------------------------------------------------

// generators and iterable objects

// executes the function is finds in Symbol.iterator
// JS executes the next method that's been created using the generator
// as long as it isn't "done" yet
for (const employee of company) {
    console.log(employee);
}

console.log([...company]);

const persons = ['Elijah', 'Hannah'];
// this array uses the same logic basically as the one we built above
console.log(persons); // Symbol.iterator will be found in the prototype

// ----------------------------------------------------------------

// the Reflect API

const course = {
    title: 'JS',
};

Reflect.setPrototypeOf(course, { 
    toString() { return this.title }
});
Reflect.defineProperty(course, 'price', { value: 1.99 });

console.log(course.toString());
console.log(course);

// ----------------------------------------------------------------

// the Proxy API
const courseHandler = {
    get(obj, propertyName) { // executed when someone tries to get the value of a property from the course object
        if (propertyName === 'length') {
            return 0;
        }
        return obj[propertyName] || 'not found';
        // return 'wow'; // override what we fetch here, but we do not mutate the object
    }
};

const pCourse = new Proxy(course, courseHandler);
console.log(pCourse.title, pCourse.length, pCourse.rating); // JS, 0, not found