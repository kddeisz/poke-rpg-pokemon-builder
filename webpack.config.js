const path = require("path");

module.exports = {
  output: {
    path: path.join(__dirname, "docs"),
    filename: "[name].js"
  },
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
        exclude: /node_modules/
      },
      { test: /\.csv$/, use: "dsv-loader" }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "docs")
  }
};
