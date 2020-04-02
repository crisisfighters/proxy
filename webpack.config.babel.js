import {join} from "path";

export default {
  entry: {
    proxy: ["./app/proxy.js"],
  },
  output: {
    path: join(__dirname, 'dist'),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ]
  }
};