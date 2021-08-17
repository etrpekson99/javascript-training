// Array Destructuring:
const nameData = ['Elijah', 'Pekson', 'Junior', 23];
const [firstName, lastName, ...otherInfo] = nameData;
console.log(firstName); // Elijah
console.log(lastName); // Pekson
console.log(otherInfo); // ['Junior', 23]