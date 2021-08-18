const ids = new Set(['Hi', 'from', 'set!']); // must be unique
ids.add(2);

// we typically want to check if a value is in a Set, 
// instead of pulling out values from there
if (ids.has('Hi')) { 
  ids.delete('Hi');
}
console.log(ids);
console.log(ids.entries()); // this returns an iterable with the same value twice
console.log(ids.values()); // returns all the values from the set