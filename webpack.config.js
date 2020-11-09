const path = require('path')
const HmtlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  devServer: {
    open: true
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [new HmtlWebpackPlugin({
    template: 'src/index.html'
  })]
}
