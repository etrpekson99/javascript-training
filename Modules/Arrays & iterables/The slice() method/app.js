// slice() returns a new array;
const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const storedResults = testResults.slice(); // a copy of testResults

console.log(storedResults, testResults);

const moreTestResults = [1, 5.3, 1.5, 10.99, -5, 10];
const moreStoredResults = testResults.slice(0, 2); // new array based on existing array that starts from the value of index zero up to BEFORE index 2
const anotherArrayOfStoredResults = testResults.slice(-3, -1);
const oneMoreArray = testResults.slice(3);
console.log(moreStoredResults); // [1, 5.3]
console.log(anotherArrayOfStoredResults); // [10.99, -5]
console.log(oneMoreArray); // [10.99, -5, 10]