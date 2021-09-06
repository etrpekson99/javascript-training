// jest automatically detects files with .test and runs them
const puppeteer = require('puppeteer');
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

test('should create a new element', async () => {
    const browser = await puppeteer.launch({
        headless: true,
        // slowMo: 80,
        // args: ['--window-size=1920,1080']
    });

    const page = await browser.newPage();
    await page.goto('file:///Users/elijahtristanpekson/Documents/programming/javascript-training/Modules/Testing/index.html');

    await page.click('input#name');
    await page.type('input#name', 'Hannah');

    await page.click('input#age');
    await page.type('input#age', '23');
    // await this.page.waitFor(2000);
    await page.click('#btnAddUser');
    // await page.$eval("#btnAddUser", (elem) => elem.click());

    const finalText = await page.$$eval('.user-item', el => el.textContent);
    expect(finalText).toBe('Hannah (23 years old)');
}, 10000);