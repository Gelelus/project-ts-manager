const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: 'dist'  //for webpak-dev-server 
  },
  devtool: 'inline-source-map', //for debag it's take source of tsjson
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
