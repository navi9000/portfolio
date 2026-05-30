const path = require("path")
const { ProvidePlugin } = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    index: "./src/main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[contenthash].js",
    chunkFilename: "js/[name].[contenthash].js",
    assetModuleFilename: "assets/[name][ext]",
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  devServer: {
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
}
