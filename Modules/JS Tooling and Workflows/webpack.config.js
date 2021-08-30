const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'app.js',
        // constructs a new absolute path starting at our current file
        path: path.resolve(__dirname, 'assets', 'scripts'),
        // tell webpack that our files are stored in a different path
        publicPath: 'assets/scripts/'
    }
};