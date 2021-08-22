class AgedPerson {
    constructor() {
        console.log(this.name); // undefined
    }

    printAge() {
        console.log(this.age);
    }
}

// constructor functions are not a perfect replacement for this class here
// everything we have in the constructor of a class can go in a constructor
// function and will have the same exact behavior.
// every field that we set up in a class will be added just as it is
// in a constructor function, only difference is, they are all
// added after a super() call in the constructor method in a class.
class Person extends AgedPerson {
    // this is added the same way it would be added if it were in the constructor() method
    // it will be added after the super() function is called
    name = 'Elijah'; // when we create a new instance of Person, only these values are built over and over again

    constructor() {
        super();
        this.age = 23;
    }

    // when we create instances of Person, we want to have different property values
    // methods, on the other hand, typically are the same across all objects
    // JS then adds a little optimization for us here
    // by adding the method to a prototype, it makes sure that whenever we 
    // create a Person object, we use the same prototype fallback object
    // it's a little optimization which leads to less objects being created,
    // which means less usage and less required memory performance,
    // because creating objects cost performance
    greet() { // this is added in the prototype of AgedPerson, therefore it is only created ONCE
        console.log(`I am ${this.name} and I am ${this.age} years old!!!`);
    }

    // we can "bypass" the optimization above by creating our functions like this:
    greet2 = function() { // won't matter if it's an arrow function or a normal function() call, this will be created as a method every time we create a new instance of this class
        console.log(`Hi I am ${this.name} and I am ${this.age} years old`);
    }

    // an arrow function will be useful if we want to bind "this" to the object
    // if we use this method in something like an event listener
    // unlike in the shorthand syntax where we'll still have to use the bind() method
    // although the bind() approach will still be better from a performance perspective
    greet3 = () => { 
        console.log(`Hi I am ${this.name} and I am ${this.age} years old`);
    }
}

function PersonFunc() {
    this.age = 23;
    this.name = 'Elijah';
}

// the equivalent of classes optimizing methods in constructor functions is when
// we manually add the function like this:
PersonFunc.prototype.greet = function() {
    console.log(`Hi I am ${this.name} and I am ${this.age} years old`);
}

const p = new Person();
console.log(p); // greet() will be in the prototype of AgedPerson, not in the prototype of Person

const p2 = new PersonFunc();
console.log(p2);

const p3 = new Person();
console.log(p.__proto__ === p3.__proto__); // true, because they use the exact same object in memory

const button1 = document.getElementById('btn1');
button1.addEventListener('click', p.greet3);

const button2 = document.getElementById('btn2');
button2.addEventListener('click', p.greet.bind(p)); // this takes up less performance than when using arrow functions