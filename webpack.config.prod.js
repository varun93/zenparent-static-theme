const path = require("path");
var webpack = require('webpack');
var autoprefixer = require('autoprefixer'); 
var homepage = path.resolve(__dirname, 'js','homepage');
var category = path.resolve(__dirname, 'js','category');
var single = path.resolve(__dirname, 'js','single');
var myspace = path.resolve(__dirname, 'js','myspace');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

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
                filename: 'commons.js',
                chunks: ['homepage', 'category','single','myspace']
            }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            minimize: true
        }),
        new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.css$/g,
          cssProcessor: require('cssnano'),
          cssProcessorOptions: { discardComments: {removeAll: true } },
          canPrint: true
        }),
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        })
    ]
};