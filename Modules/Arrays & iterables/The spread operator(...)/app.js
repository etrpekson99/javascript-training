const prices = [10.99, 5.99, 3.99, 6.59];

const nameFragments = ['Max', 'Schwarz'];

const copiedNameFragments = [...nameFragments]; // this will create a brand new array
nameFragments.push('Mr');
console.log(nameFragments); // ['Max', 'Schwarz', 'Mr']
console.log(copiedNameFragments); // ['Max', 'Schwarz']

console.log(Math.min(...prices)); // Math.min() only accepts numbers, not an array of numbers, therefore we are passing a list of standalone values here

const persons = [{ name: 'Max', age: 30 }, { name: 'Manuel', age: 31 }];
const copiedPersons = persons.map(person => ({ // this creates a new array and a new object for every person
  name: person.name,
  age: person.age
}));

persons.push({ name: 'Anna', age: 29 });
persons[0].age = 31;

console.log(persons, copiedPersons);

// side note to be careful when spreading an array of objects,
// because those objects aren't really the objects themselves,
// but the REFERENCES to the objects, therefore, mutating the
// values within the first array of objects WILL ALSO mutate
// the values in the copied array
// const persons = [...persons]; // this only creates a new array, not new objects in the array