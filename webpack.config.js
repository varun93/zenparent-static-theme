const path = require("path");
var webpack = require('webpack');
var autoprefixer = require('autoprefixer'); 
var homepage = path.resolve(__dirname, 'js','homepage');
var category = path.resolve(__dirname, 'js','category');
var single = path.resolve(__dirname, 'js','single');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
   entry: {
        homepage : ['webpack/hot/only-dev-server',homepage],
        category : ['webpack/hot/only-dev-server',category],
        single : ['webpack/hot/only-dev-server',single]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js"
  },
  resolve: {
        root: [path.resolve(__dirname, 'js'),path.resolve(__dirname, 'node_modules')],
        extensions: ['', '.js', '.hbs']
    },
    module: {
        loaders: [
            {
                test: /\.hbs$/,
                loader: "handlebars-loader",
                query: { 
                  helperDirs: [
                    path.resolve(__dirname, "js/helpers")
                  ],
                   partialDirs: [
                    path.join(__dirname, 'js', 'partials'),
                    path.join(__dirname, 'js', 'partials','cards'),
                    path.join(__dirname, 'js', 'partials','widgets')
                  ]
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            }, 
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
    },
    postcss: function () { //NEW
     return [autoprefixer];
    },
    plugins : [
      new ExtractTextPlugin('[name].css')
    ]
};