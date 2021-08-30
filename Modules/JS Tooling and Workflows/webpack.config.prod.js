const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/app.js',
    output: {
        filename: '[contenthash].js', // tells webpack that a hash should be generated when a file changed
        path: path.resolve(__dirname, 'assets', 'scripts'),
        publicPath: 'assets/scripts/'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname),
        },
    },
    devtool: 'cheap-source-map',
    plugins: [
        new CleanPlugin.CleanWebpackPlugin(),
    ],
};