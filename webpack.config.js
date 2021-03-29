  
const path = require("path")

module.exports = {
  entry: {
    bundle: "./src/application.js"
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js',
  },

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: path.join(__dirname, 'public'),
    inline: true,
    compress: true,
    port: 8080,
  },

  mode: "production",
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/
        ],
        use: [
          { loader: "babel-loader" }
        ]
      }
    ]
  }
}
