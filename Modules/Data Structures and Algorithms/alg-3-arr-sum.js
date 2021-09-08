const array = [1, 2, 5];

// Linear time complexity => O(n)
// the longer our input is, the longer this will take
const sumUp = (arr) => {
    let sum = 0; // 1 execution

    for(let i = 0; i < arr.length; i++) { // n where n is the length of the array
        sum += arr[i];
    }

    return sum;
}

console.log(sumUp(array)); // 8