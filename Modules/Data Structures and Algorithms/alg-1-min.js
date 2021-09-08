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
// T = n; can be simplified to this => here we have linear time complexity; if we feed it more items, it takes longer => O(n)

const getMin2 = (numbers) => {
    if (!numbers.length) {
        throw new Error('should not be an empty array');
    }

    for (let i = 0; i < numbers.length; i++) {
        let outerElement = numbers[i];
        for(let j = i + 1; j < numbers.length; j++) {
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

    return numbers[0];
}

const testNumbers = [3, 7, 2, 8, -15, 1];
const testNumbers2 = [3, 1, 2];

const min = getMin(testNumbers);
const min2 = getMin2(testNumbers);

console.log(min, min2); // should be 1