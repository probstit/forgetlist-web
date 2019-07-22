const path = require("path");
const rules = [
  {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: "babel-loader"
  },
  {
    test: /\.scss$/,
    use: [
      "style-loader",
      { loader: "css-loader", options: { importLoaders: 1 } },
      "sass-loader"
    ]
  }
];

module.exports = {
  target: "web",
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: { rules },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  devServer: {
    contentBase: "./",
    port: 8001
  }
};
