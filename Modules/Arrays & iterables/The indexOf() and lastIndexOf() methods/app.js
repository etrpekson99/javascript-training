// indexOf() returns the index of the value we pass as an argument
const array = [1, 2, 3];
console.log(array.indexOf(2)); // 1

// lastIndexOf() returns the index of the value we pass as an argument starting from the end
console.log(array.lastIndexOf(3)); // 2

const personData = [{ name: 'Max' }, { name: 'Manuel' }]; // does not work with reference values
console.log(personData.indexOf({ name: 'Manuel' })); // -1 since it cannot find the object
