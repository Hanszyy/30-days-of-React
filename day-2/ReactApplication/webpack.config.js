const path = require('path');

module.exports = {
  entry: './components/App.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'App.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};
