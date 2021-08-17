const testData = [1, 2, 3];
// includes only works on primitive data types, will return boolean whether an array includes a given argument
console.log(testData.includes(2)); // true

// previously we tried to get the index of an object, but that didn't work
const personData = [{ name: 'Max' }, { name: 'Manuel' }];
console.log(personData.indexOf({ name: 'Manuel' })); // -1

// find() is available in every real array
const manuel = personData.find((person, idx, persons) => { // (individual array element, index, full array), will return matching item / individual elemtn
  return person.name === 'Manuel';
});

console.log(manuel);

manuel.name = 'Anna';

console.log(manuel, personData);

const maxIndex = personData.findIndex((person, idx, persons) => { // will return matching index of the item
  return person.name === 'Max';
});

console.log(maxIndex);