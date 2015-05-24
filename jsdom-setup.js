// this doesn't work with jsdom 5+ version
// var jsdom = require('jsdom');
//
// global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
// global.window = document.parentWindow;

var jsdom = require("jsdom").jsdom;

global.document = jsdom();
global.window = document.defaultView;
