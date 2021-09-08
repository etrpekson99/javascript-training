const getMin = (numbers) => {
    if (!numbers.length) {
        throw new Error('should not be an empty array');
    }

    let currentMin = numbers[0];
    
    for(let i = 1; i < numbers.length; i++) {
        if (numbers[i] < currentMin) {
            currentMin = numbers[i];
        }
    }

    return currentMin;
}

const testNumbers = [3, 7, 2, 8, -15, 1];

const min = getMin(testNumbers);

console.log(min); // should be 1