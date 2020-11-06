const path = require('path')
const HmtlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  devServer: {
    open: true,
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },

  plugins: [new HmtlWebpackPlugin()],
}