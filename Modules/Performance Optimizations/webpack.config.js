const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: {
    shop: './src/optimized/shop.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  // devtool: 'cheap-module-eval-source-map', // most source maps affect our code size too, but here it won't be a problem
  devtool: 'source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                { useBuiltIns: 'usage', corejs: { version: 3 } }
              ]
            ]
          }
        }
      }
    ]
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin()]
};
