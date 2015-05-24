var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('mocha', shell.task('./node_modules/.bin/mocha --compilers js:babel/register app/components/**/__test__/*-test.js jsdom-setup.js'));
