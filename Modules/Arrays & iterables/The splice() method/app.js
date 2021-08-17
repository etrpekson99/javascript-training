const hobbies = ['Sports', 'Cooking'];

// splice() is only available in real arrays
// it is not available for other iterables or array-like objects
// tell splice where it should start looking (index 0), then delete as many elements as specified (0 elements), then insert values from index (add 'Good Food')
hobbies.splice(1, 0, 'Good Food');
console.log(hobbies); // ['Sports', 'Good Food', 'Cooking'];

const removedElements = hobbies.splice(-2, 1); // negative index means it will start from the end of the array
console.log(hobbies); // ['Sports', 'Cooking'];