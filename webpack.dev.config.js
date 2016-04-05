var merge = require( 'webpack-merge' );
var commonConfig = require('./webpack.common.config.js').commonConfig;
var indexFileConfig = require('./webpack.common.config.js').indexFileConfig;
var devConfig = require('./webpack.common.config.js').devConfig;
var elmHotLoaderConfig = require('./webpack.common.config.js').elmHotLoaderConfig;
var indexDevEntryConfig = require('./webpack.common.config.js').indexDevEntryConfig;

module.exports = merge(indexDevEntryConfig, indexFileConfig, devConfig, commonConfig, elmHotLoaderConfig);
