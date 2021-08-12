let j = 0;
outerWhile: do {
    console.log('Outer', j);
    innerFor: for (let k = 0; k < 5; k++) {
        if (k === 3) {
            break outerWhile; // this while break the do-while loop
        }
        console.log('Inner', k);
    }
} while (j < 3);