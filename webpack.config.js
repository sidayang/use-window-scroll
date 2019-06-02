const path = require("path");

module.exports = env => {
  return {
    context: path.resolve(__dirname, "src"),
    entry: {
      bundle: "./index.ts"
    },
    mode: "production",
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "build"),
      publicPath: "/",
      libraryTarget: "commonjs2"
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: [path.resolve(__dirname, "node_modules")],
          use: ["babel-loader", "awesome-typescript-loader", "tslint-loader"]
        }
      ]
    },
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      extensions: [".ts", ".tsx", ".js"]
    },
    externals: {
      react: "commonjs2 react",
      throttleit: "commonjs2 throttleit"
    }
  };
};
