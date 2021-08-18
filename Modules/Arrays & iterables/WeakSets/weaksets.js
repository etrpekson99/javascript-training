let person = { name: 'Max' };
const persons = new WeakSet(); // requires objects to be stored only (including arrays)

// it can clear these objects for you if we don't use
// a specific data anymore
persons.add(person);

person = null;

console.log(persons); // will output the object as null eventually when it's garbage collected

