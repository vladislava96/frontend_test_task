const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CopyPlugin = require("copy-webpack-plugin");
const dataset = require('./src/dataset.json');

module.exports = {
    entry: {
      client: "./src/client.js",
      style: "./src/client.scss"
    },
    output: {
      path: __dirname + "/dist",
      filename: '[name].bundle.js',
      clean: true,
    },
    resolve: {
      extensions: [".js", ".marko"]
    },
    module: {
      rules: [
        {
          test: /\.marko$/,
          loader: "@marko/webpack/loader"
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        }
      ]
    },
    mode: 'development',
    plugins: [
      new HtmlWebpackPlugin({
        title: dataset.page_meta.title,
        template: './src/index.html',
        meta: {
          keywords: dataset.page_meta.meta_keywords,
          description: dataset.page_meta.meta_description
        }
      }),
      new CopyPlugin({
        patterns: [
          { from: "src/img", to: "img" },
          { from: "src/svg", to: "svg" },
        ],
      }),
    ],
  };