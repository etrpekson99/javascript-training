const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading'); // add to the end of the array
console.log(hobbies); // ['Sports', 'Cooking', 'Reading']
hobbies.unshift('Coding'); // adding to the beginning of an array
console.log(hobbies); // ['Coding', 'Sports', 'Cooking', 'Reading']
const poppedValue = hobbies.pop(); // remove the last element, also returns the element removed
hobbies.shift(); // remove the first item in the array
console.log(hobbies);

// push and pop are faster than shift and unshift

hobbies[1] = 'Coding';
console.log(hobbies); // ['Sports', 'Coding']

hobbies[5] = 'Reading';
console.log(hobbies); // ['Sports', 'Coding', empty x 3, 'Reading'] there are 3 empty slots in between
console.log(hobbies[4]) // undefined