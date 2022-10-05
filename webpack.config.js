const path = require("path");
const isDevelopment = process.env.NODE_ENV === "development";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    compress: true,
    port: 8080,
    open: true,
  },
  resolve: { extensions: [".js", "jsx", "scss"] },
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
        test: /\.css$/,
        use: [
          // MiniCssExtractPlugin.loader,
          "style-loader",
          'css-loader'
        ]
      },
      {
        test: /\.module\.(s[ac]ss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(s[ac]ss|css)$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
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
    new MiniCssExtractPlugin({
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
