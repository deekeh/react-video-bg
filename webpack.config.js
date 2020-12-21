const path = require("path");
const pkg = require("./package.json");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: pkg.name,
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|svg|gif|mp4$)/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, "node_modules", "react"),
    },
  },
  target: "node",
  externals: [nodeExternals()],
};
