const path = require("path");
var webpack = require('webpack');
var autoprefixer = require('autoprefixer'); 
var mainPath = path.resolve(__dirname, 'js','index');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
   entry: [
        'webpack/hot/only-dev-server',
         mainPath
    ],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
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
                loader: ExtractTextPlugin.extract("style-loader", "css-loader","postcss")
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