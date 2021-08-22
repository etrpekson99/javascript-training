class Person {
    name = 'Elijah';

    constructor() {
        this.age = 23;
    }

    greet() {
        console.log(`I am ${this.name} and I am ${this.age} years old!!!`);
    }
}

const course = {
    title: 'JS',
    rating: 5,
};

console.log(course.__proto__); // default Object.prototype

console.log(Object.getPrototypeOf(course)); // the same output as course.__proto__

Object.setPrototypeOf(course, {
    // this new object that we set as a prototype will also have it's own prototype
    // which is also Object.prototype, so we don't even have to use the next line
    // ...Object.getPrototypeOf(course),
    printRating: function() {
        console.log(`${this.rating}/5`);
    }
}); // we can override the prototype assigned to the object after the object was created

const student = Object.create({ // {} but with a twist: the object we pass as a parameter will be set as a prototype for this initial object
    printProgress: function() {
        console.log(this.progress);
    }
}, {
    name: { // this is another way of adding key-value pairs to an object
        configurable: false,
        enumerable: false,
        value: 'Elijah',
        writable: true,
    }
}); 

Object.defineProperty(student, 'progress', {
    configurable: true,
    enumerable: true,
    value: 0.8,
    writable: false,
})

console.log(student); // printProgress will be part of the prototype

course.printRating();