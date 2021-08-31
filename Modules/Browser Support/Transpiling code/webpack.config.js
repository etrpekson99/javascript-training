const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  devtool: 'cheap-module-eval-source-map',
  module: { // how it transforms our different modules (files)
    rules: [
      {
        // how we define the file we want to translate should be identified
        test: /\.m?js$/, // any file ending in .js or .mjs should be treated with this rule
        exclude: /node_modules/, // exclude files
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env', 
                {
                  targets: "defaults",
                  // with useBuiltIns, we manually have to add polyfill imports and babel will replace it with the actual polyfills we need
                  useBuiltIns: 'entry',
                  // with usage, babel will add polyfills entries as it detects them, so it basically checks which features we use and add imports accordingly
                  // useBuiltIns: 'usage',
                  corejs: {
                    version: 3, // tell babel which version of corejs we are using
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin()]
};
