// BEST CASE: [5] => O(1) => constant time complexity, where the code in the for loop is not executed at all
// WORST CASE: [3, 1] => O(n) because all code blocks are executed
const getMin = (numbers) => { // [3, 1, 2]
    if (!numbers.length) { // 1 execution
        throw new Error('should not be an empty array');
    }

    let currentMin = numbers[0]; // 1 execution (sometimes won't run at all)
    
    for(let i = 1; i < numbers.length; i++) { // 1 execution
        if (numbers[i] < currentMin) { // 2 executions given 3 items in an array
            currentMin = numbers[i]; // 0 - 2 executions given our array
        }
    }

    return currentMin; // 1 execution
}
// T = c1 + (n * c2) + c3; the first and the third blocks are constants
// T = n; can be simplified to this => here we have LINEAR time complexity; if we feed it more items, it takes longer => O(n)

// BEST CASE: [1, 2, 3] => O(n^2) because the if statement does not execute
// WORST CASE: [3, 2, 1] => O(^2) but the if statement executes EVERY iteration
// AVERAGE CASE: [?, ?, ?] => the standard case we have to care about
const getMin2 = (numbers) => {
    if (!numbers.length) { // 1 execution
        throw new Error('should not be an empty array');
    }

    for (let i = 0; i < numbers.length; i++) {
        let outerElement = numbers[i]; // n times where n is length of array
        for(let j = i + 1; j < numbers.length; j++) { // n times
            let innerElement = numbers[j];

            if (outerElement > innerElement) {
                // swap
                numbers[i] = innerElement;
                numbers[j] = outerElement;

                outerElement = numbers[i];
                innerElement = numbers[j];
            }
        }
    }

    return numbers[0]; // 1 execution
}
// T = n * n; => O(n^2); this is a QUADRATIC time complexity (for 1000 items, it takes 1000 * 1000 times to execute)

const testNumbers = [3, 7, 2, 8, -15, 1];
const testNumbers2 = [3, 1, 2];

const min = getMin(testNumbers);
const min2 = getMin2(testNumbers);

console.log(min, min2); // should be 1

// the linear one is better