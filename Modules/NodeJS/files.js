const fs = require('fs');

const userName = 'Eli';

console.log(`hi ${userName}`);

// document.querySelector('div'); // this will not work in node

// ----------------------------------------------------------------------------

// modules and file access
fs.writeFile('user-data.txt', 'username=Elijah', err => {
    if (err) {
        console.log(err);
    } else {
        console.log('wrote to file');
    }
});

fs.readFile('user-data.txt', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data.toString());
})