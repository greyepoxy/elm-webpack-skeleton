var merge = require( 'webpack-merge' );
var commonConfig = require('./webpack.common.config.js').commonConfig;
var devConfig = require('./webpack.common.config.js').devConfig;
var elmConfig = require('./webpack.common.config.js').elmConfig;
var testFileConfig = require('./webpack.common.config.js').testFileConfig;
  
module.exports = merge(testFileConfig, devConfig, commonConfig, elmConfig);
