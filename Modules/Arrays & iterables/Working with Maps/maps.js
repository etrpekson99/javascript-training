const person1 = { name: 'Max' };
const person2 = { name: 'Manuel' };

// each array in the array is a key-value pair
// person1 is the key
const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);

// add an entry into the map
personData.set(person2, [{ date: 'two weeks ago', price: 100 }]);

console.log(personData);
// get() is used to get a value in the map using the corresponding key
console.log(personData.get(person1));

for (const [key, value] of personData.entries()) { // entries() returns the key-value pairs
  console.log(key, value);
}

for (const key of personData.keys()) { // keys() returns the keys
  console.log(key);
}

for (const value of personData.values()) { // values() returns the values
  console.log(value);
}

console.log(personData.size); // equivalent to array.length for arrays