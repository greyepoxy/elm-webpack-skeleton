var merge = require( 'webpack-merge' );
var commonConfig = require('./webpack.common.config.js').commonConfig;
var indexFileConfig = require('./webpack.common.config.js').indexFileConfig;
var elmConfig = require('./webpack.common.config.js').elmConfig;
var indexEntryConfig = require('./webpack.common.config.js').indexEntryConfig;
	
module.exports = merge(indexEntryConfig, indexFileConfig, commonConfig, elmConfig, {
  
  //TODO: perform optimizations!
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),

    // minify & mangle JS/CSS
    // new webpack.optimize.UglifyJsPlugin({
    //     minimize:   true,
    //     compressor: { warnings: false }
    //     // mangle:  true
    // })
  ]

});
