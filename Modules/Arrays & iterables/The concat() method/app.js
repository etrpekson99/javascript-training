const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// allows us to add elements to the end of an array
// accepts array/s then combines them with the existing array, and then returns a brand new array
const storedResults = testResults.concat([3.99, 2]); 

console.log(storedResults); // [1, 5.3, 1.5, 10.99, -5, 10, 3.99, 2]