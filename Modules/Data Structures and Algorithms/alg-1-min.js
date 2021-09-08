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