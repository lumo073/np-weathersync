const path = require("path");
const webpack = require("webpack");

const buildPath = path.resolve(__dirname, "../");

const client = {
  entry: "./src/client/client.ts",
  output: {
    path: path.resolve(buildPath, "client"),
    filename: "cl_main.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new webpack.DefinePlugin({ "global.GENTLY": false })],
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: "node",
};

const server = {
  entry: "./src/server/server.ts",
  output: {
    path: path.resolve(buildPath, "server"),
    filename: "sv_main.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new webpack.DefinePlugin({ "global.GENTLY": false })],
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: "node",
};

module.exports = [client, server];