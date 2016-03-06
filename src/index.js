'use strict';

require("basscss/css/basscss.css");

var Elm = require('./Main.elm');
var mountNode = document.getElementById('main');

var app = Elm.embed(Elm.Main, mountNode);
