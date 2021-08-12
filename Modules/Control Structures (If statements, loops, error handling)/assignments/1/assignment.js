const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// 1
let isGreaterThan = false;
while (!isGreaterThan) {
    const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
    console.log(randomNumber);
    if (randomNumber > 0.7) {
        isGreaterThan = true;
        console.log(`FINAL: ${randomNumber}`);
    }
}

// 2
const array = [1, 2, 3];
for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for (const num of array) {
    console.log(num);
}

// 3
for (i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}

// 4
let isEndLoop = false;
while (!isEndLoop) {
    const randomNumber1 = Math.random();
    const randomNumber2 = Math.random();
    if (randomNumber1 > 0.7 && randomNumber2 > 0.7 || randomNumber2 < 0.2 || randomNumber1 < 0.2) {
        console.log(randomNumber1, randomNumber2);
        isEndLoop = true;
    }
}

// SOLUTION (if mine was incorrect)
// 1
if (randomNumber >= 0.7) {
    console.log('greater than or equal 0.7')
}

// 4
const randomNumber2 = Math.random(); // produces random number between 0 (including) and 1 (excluding)
if ((randomNumber1 > 0.7 && randomNumber2 > 0.7) || randomNumber2 <= 0.2 || randomNumber1 <= 0.2) {
    console.log('condition met');
}

// Lessons:
// Understand the word problem better first before diving into the code