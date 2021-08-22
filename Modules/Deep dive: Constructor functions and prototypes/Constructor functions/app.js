class Person { // this class here is just syntactical sugar
    name = 'Elijah';

    constructor() {
        this.age = 23;
    }

    greet() {
        console.log(`Hi I am ${this.name} and I am ${this.age} years old`);
    }
}

// the class above would typically be written like this, a constructor function
// we can't expect that this function returns an object
// it will only return an object because of the "new" keyword
// calling it like this const personFunc = PersonFunc() won't work
function PersonFunc() {
    // behind the scenes, the "new" keyword sets "this" to an empty object
    // this = {};
    this.age = 23;
    this.name = 'Elijah';
    this.greet = function() {
        console.log(`Hi I am ${this.name} and I am ${this.age} years old`);
    }
    // also behind the scenes is the function returning "this" when "new" is used
    // return this;
}

const personFunc = new PersonFunc();
personFunc.greet();

const person = new Person();
person.greet();