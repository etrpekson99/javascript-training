const data = 'new york;10.99;2000';

// split() is a string method which splits a string into an array of multiple segments
const transformedData = data.split(';'); // we provide the separator by which we split
console.log(transformedData);
transformedData[1] = +transformedData[1]; // transform string to number
console.log(transformedData);

// join() merges an array and ALWAYS converts it to a string
const nameFragements = ['Max', 'Schwarz'];
const name = nameFragements.join(' '); // also accepts a separator
console.log(name);