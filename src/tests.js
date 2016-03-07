'use strict';

var Elm = require('./TestRunner.elm');
var mountNode = document.getElementById('main');

var app = Elm.embed(Elm.TestRunner, mountNode);
