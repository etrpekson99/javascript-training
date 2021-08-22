class AgedPerson { // this class here is just syntactical sugar
    printAge() {
        console.log(this.age);
    }
}

// what this does is that it creates an object based on
// the AgedPerson class, and then sets it as a prototype
// to the object based on Person class
class Person extends AgedPerson {
    name = 'Elijah';

    constructor() {
        super();
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

// prototype property of the function object can be used to assign an object
// which then will be assigned as a prototype to any objects we build 
// based on the constructor function.
// we replace the old default object which is assigned as an object
// with a new object
PersonFunc.prototype = {
    printAge() {
        console.log(this.age); // "this" always refers to the object on which we called the method
    }
}

// an alternative and better approach would be to manually add
// printAge like this:
// PersonFunc.prototype.printAge = function() {
//      console.log(this.age);
// }

const personFunc = new PersonFunc();
personFunc.greet();

const person = new Person();
person.greet();

console.log(personFunc.toString()); // this will work because of prototypes
// our constructor function also points to an "invisible" function
// console.log(person.toStr()); // this will NOT work

// this is the default object every custom constructor function
// assigns to an object based on it
personFunc.printAge();
console.log(personFunc.toString());
console.log(person.__proto__);

// prototype in Person.prototype is not a fallback for the Person class / constructor function
console.log(person.__proto__ === Person.prototype); // true, 