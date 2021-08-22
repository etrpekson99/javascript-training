class AgedPerson {
    constructor() {
        console.log(this.name); // undefined
    }

    printAge() {
        console.log(this.age);
    }
}

// constructor functions is not a perfect replacement for this class here
// everything we have in the constructor of a class can go in a constructor
// function and will have the same exact behavior.
// every field that we set up in a class will be added just as it is
// in a constructor function, only difference is, they are all
// added after a super() call in the constructor method in a class.
class Person extends AgedPerson {
    // this is added the same way it would be added if it were in the constructor() method
    // it will be added after the super() function is called
    name = 'Elijah'; 

    constructor() {
        super();
        this.age = 23;
    }

    greet() { // this is added in the prototype of AgedPerson
        console.log(`Hi I am ${this.name} and I am ${this.age} years old`);
    }
}

function PersonFunc() {
    this.age = 23;
    this.name = 'Elijah';
    this.greet = function() {
        console.log(`Hi I am ${this.name} and I am ${this.age} years old`);
    }
}

const p = new Person();
console.log(p); // greet() will be in the prototype of AgedPerson, not in the prototype of Person

const p2 = new PersonFunc();
console.log(p2);