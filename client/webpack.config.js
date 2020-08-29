const webpack = require("webpack");
const path = require("path");
const { spawn } = require("child_process");
const colors = require("colors");
const Dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const LiveReloadPlugin = require("webpack-livereload-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const { NODE_ENV, OPTIMIZED_BUILD } = process.env;
const webpackDotEnvPath = `./config/.env.${NODE_ENV}`;
const webpackEnvVars = Dotenv.config({ path: webpackDotEnvPath }).parsed;
const localEnvironment = NODE_ENV === "local";
const isOptimized = OPTIMIZED_BUILD === "true" || NODE_ENV === "production";
const webpackWatch = localEnvironment && !isOptimized;
const webpackMode = isOptimized ? "production" : "development";
const webpackDevtool = isOptimized ? "hidden-source-map" : "cheap-eval-source-map";

const config = {
  mode: webpackMode,
  watch: webpackWatch,
  entry: path.resolve(__dirname, "src"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `[name].[${webpackMode === "production" ? "contenthash" : "hash"}].js`,
    chunkFilename: `[name].[${webpackMode === "production" ? "contenthash" : "hash"}].js`,
  },
  target: "web",
  devtool: webpackDevtool,
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(ts|tsx|js|jsx)?$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: [
          {
            loader: "eslint-loader",
            options: {
              emitWarning: true,
              emitError: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({ patterns: [{ from: "public" }] }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify({ NODE_ENV, ...webpackEnvVars }),
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    nodeEnv: false,
  },
};

if (localEnvironment) {
  config.plugins.push(
    new ForkTsCheckerWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new LiveReloadPlugin(),
    {
      apply: (compiler) => {
        let executed = false;
        compiler.hooks.afterEmit.tap("AfterFirstEmitPlugin", () => {
          if (!executed) {
            const cmd = spawn("yarn", ["server:build"], { stdio: "pipe" });
            cmd.stdout.on("data", function (data) {
              console.log(colors.green.bold(data.toString()));
            });
            cmd.stderr.on("data", function (data) {
              console.error(colors.red.bold(data.toString()));
            });
            cmd.on("exit", function (code) {
              console.log("AfterFirstEmitPlugin exited with code " + code.toString());
            });
            executed = true;
          }
        });
      },
    },
  );
}

if (isOptimized) {
  config.performance = {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
    hints: "warning",
  };
  config.optimization = {
    ...config.optimization,
    usedExports: true,
    runtimeChunk: "single",
    moduleIds: "hashed",
    splitChunks: {
      chunks: "all",
    },
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          compress: {
            drop_console: true,
            pure_funcs: ["console.info", "console.debug", "console.warn"],
          },
          output: {
            beautify: false,
            comments: false,
          },
        },
      }),
    ],
  };
}

module.exports = config;
