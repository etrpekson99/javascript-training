class Person {
    name = 'Elijah';

    constructor() {
        this.age = 23;
    }

    greet() {
        console.log(`Hi I am ${this.name} and I am ${this.age} years old`);
    }
}

// the class above would typically be written like this
function PersonFunc() {
    this.age = 23;
    this.name = 'Elijah';
    this.greet = function() {
        console.log(`Hi I am ${this.name} and I am ${this.age} years old`);
    }
}

const person = new Person();
person.greet();