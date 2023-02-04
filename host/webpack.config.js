const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");


const deps = require("./package.json").dependencies;
module.exports = {
  mode: 'production',
  output: {
    publicPath: "http://localhost:5000/",
  },

  optimization: {
    minimize: false
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    fallback: {
      fs: false,
    }
  },

  devServer: {
    port: 5000,
    historyApiFallback: true,
  },

  // target: 'node',

  // resolve: {
  //     fallback: {
  //         "fs": false
  //     },
  // },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        'remote': 'remote@http://localhost:5002/remoteEntry.js'
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
