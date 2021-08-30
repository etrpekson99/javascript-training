const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'app.js',
        // constructs a new absolute path starting at our current file
        path: path.resolve(__dirname, 'assets', 'scripts'),
    }
};