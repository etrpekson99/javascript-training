const person = {
    // name: 'Elijah',
    greet() {
        console.log(this.name);
    }
};

person.greet();
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
console.log(Object.getOwnPropertyDescriptor(person, 'greet'));

Object.defineProperty(person, 'name', {
    configurable: false,
    enumerable: true, // excludes the key-value pair from for-in loops
    value: person.name,
    writtable: false,
}); // the third argument is the descriptors that describes the value

person.name = 'Tristan';
console.log(person.name); // undefined