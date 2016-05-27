var path = require("path");
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

  commonConfig: {
    resolve: {
      modulesDirectories: ['node_modules'],
    },
    
    plugins: [
      new ExtractTextPlugin('styles.[hash].css'),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject:   'body',
        filename: 'index.html'
      })
    ],

  },
  
  indexFileConfig: {
    entry: {
      app: [
        './src/index.js'
      ]
    },
    output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname + '/dist'),
    },
    
    module: {
      loaders: [
        {
          test: /\.(css)$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&minetype=application/font-woff',
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader',
        },
        {
          test: /\.(png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$ /,
          loader: 'url-loader?limit=10000![name].[ext]?[hash]'
        }
      ],
    },
  },
  
  testFileConfig: {
    entry: {
      app: [
        './src/tests.js'
      ]
    },

    output: {
      path: path.resolve(__dirname + '/dist/tests'),
      filename: 'tests.js',
    },
  },
  
  devConfig: {

    devServer: {
      stats: 'errors-only'
    },
  },
  
  elmConfig: {
    module: {
      loaders: [
        {
          test: /\.elm$/,
          exclude: [/elm-stuff/, /node_modules/],
          loader: 'elm-webpack'
        }
      ],
      noParse: /\.elm$/,
    }
  },
  
  elmHotLoaderConfig: {
    module: {
      loaders: [
        {
          test: /\.elm$/,
          exclude: [/elm-stuff/, /node_modules/],
          loader: 'elm-hot!elm-webpack'
        }
      ],
      noParse: /\.elm$/,
    }
  },

};