let person = { name: 'Max' };

const personData = new WeakMap();
personData.set(person, 'Extra info');

person = null;

console.log(personData); // eventually the person object will be garbage collected