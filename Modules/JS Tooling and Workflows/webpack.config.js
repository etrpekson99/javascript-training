const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'app.js',
        // constructs a new absolute path starting at our current file
        path: path.resolve(__dirname, 'assets', 'scripts'),
        // tell webpack that our files are stored in a different path
        publicPath: 'assets/scripts/'
    },
    devServer: {
        static: {
            // tell webpack where our page is being served from
            directory: path.resolve(__dirname),
        },
    },
    // how webpack links our file to the original code
    devtool: 'cheap-module-eval-source-map', // this allows us to better debug our code
    // plugins: [
    //     new CleanPlugin.CleanWebpackPlugin(),
    // ],
};