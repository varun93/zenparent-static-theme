const path = require("path");
var webpack = require('webpack');
var autoprefixer = require('autoprefixer'); 
var homepage = path.resolve(__dirname, 'js','homepage');
var category = path.resolve(__dirname, 'js','category');
var single = path.resolve(__dirname, 'js','single');
var myspace = path.resolve(__dirname, 'js','myspace');

// webpack plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// Commons chunk plugin
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

// vendor: ["jquery", "other-lib"]

module.exports = {
   entry: {
        homepage : homepage,
        category : category,
        single : single,
        myspace : myspace
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
        new ExtractTextPlugin('[name].css'),
        new CommonsChunkPlugin({
                name: 'commons',
                filename: 'commons-[hash].js',
                chunks: ['homepage', 'category','single','myspace']
            }),
        new HtmlWebpackPlugin({
          template : path.resolve(__dirname, 'js','index.html'),
          hash : false,
          filename : 'index.html',
          chunks : ['commons','homepage']
         }),
        new HtmlWebpackPlugin({
        template : path.resolve(__dirname, 'js','index.html'),
        hash : false,
        filename : 'parenting.html',
        chunks : ['commons','category']
       }),
        new HtmlWebpackPlugin({
        template : path.resolve(__dirname, 'js','index.html'),
        hash : false,
        filename : 'single.html',
        chunks : ['commons','single']
       }),
        new HtmlWebpackPlugin({
        template : path.resolve(__dirname, 'js','index.html'),
        hash : false,
        filename : 'my-space.html',
        chunks : ['commons','myspace']
       }),
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('developement')
          }
        })
    ]
};