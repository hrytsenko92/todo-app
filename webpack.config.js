
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
 context: path.resolve(__dirname, "src"),
 mode: "development",
 entry: ["@babel/polyfill", "./index.js"],
 output: {
   path: path.resolve(__dirname, "build"),
   filename: "[name].[contenthash].js",
 },
 resolve: { extensions: [".ts", ".tsx", ".js", "jsx"] },
 devServer: { port: 4020 },
 module: {
   rules: [
     {
      test: /\.(js|jsx)$/,
       exclude: /node_modules/,
       use: {
         loader: "babel-loader",
         options: {
           presets: [
             "@babel/preset-env",
             "@babel/preset-react"
           ],
         },
       },
     },
     {
       test: /\.html$/,
       use: ["html-loader"],
     },
     {
       test: /\.(css)$/,
       use: ["miniCssExtractPlugin.loader", "css-loader"],
     },
     {
       test: /\.s[ac]ss$/,
       use: ["miniCssExtractPlugin.loader", "css-loader", "sass-loader"],
     },
     {
       test: /\.(jpe?g|png|gif|mp3|svg)$/,
       use: ["file-loader"],
     },
     {
       test: /\.(csv)$/,
       use: ["csv-loader"],
     },
     {
       test: /\.(ttf|woff|woff2|eot)$/,
       use: ["file-loader"],
     },
     {
       test: /\.(xml)$/,
       use: ["xml-loader"],
     },
   ],
 },
 plugins: [
   new HtmlWebpackPlugin({
     filename: "index.html",
     template: path.join(__dirname, "src", "index.html"),
   }),
   new CleanWebpackPlugin(),
   new miniCssExtractPlugin({
     filename: "[name].[contenthash].css",
   }),
   // new CopyWebpackPlugin([
   //     {
   //         from: path.resolve(__dirname, "src/.."),
   //         to: path.resolve(__dirname, "build")
   //     }
   // ])
 ],
};