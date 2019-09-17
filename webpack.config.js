var path = require("path");
var webpack = require("webpack");
var nodeExternals = require("webpack-node-externals");

var browserConfig = {
  entry: "./src/browser/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              path: path.resolve(__dirname, "public"),
              outputPath: "/static-assets",
              publicPath: "/static-assets",
              fallback: "responsive-loader",
              quality: 85
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ]
};

var serverConfig = {
  entry: "./src/server/index.js",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: "server.js",
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: "babel-loader" },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "public/static-assets",
              publicPath: "/static-assets",
              fallback: "responsive-loader",
              quality: 85
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
};

module.exports = [browserConfig, serverConfig];
