// jest automatically detects files with .test and runs them

const { generateText, checkAndGenerate } = require('./util'); // this is the native way of importing in jest tests

// test() is globally available via jest
test('should output name and age', () => { // this is the function jest executes to run a test
    const text = generateText('Elijah', 23);
    expect(text).toBe("Elijah (23 years old)");
    
    // expect(text).toBe("Elijah (21 years old)"); // this will show a fail

    const text2 = generateText('Hannah', 23);
    expect(text2).toBe("Hannah (23 years old)");
});

test('should output data that was passed', () => { // check for empty values
    const text = generateText('', null);
    expect(text).toBe(' (null years old)');

    const text2 = generateText();
    expect(text2).toBe('undefined (undefined years old)');
});

test('should generate a valid text output', () => {
    const text = checkAndGenerate('Eli', 23);
    expect(text).toBe("Eli (23 years old)");
});

test('should return false', () => {
    const text = checkAndGenerate(null, 23);
    expect(text).toBe(false);

    const text1 = checkAndGenerate('Eli', null);
    expect(text1).toBe(false);
});