'use strict';

var path = require('path');
var gulp = require('gulp');
var runSequence = require('run-sequence');
var webdriver = require('gulp-webdriver');
var selenium = require('selenium-standalone');
var os = require('os');
var mocha = require('gulp-mocha');

gulp.task('selenium', (done) => {
  selenium.install({
    logger: (message) => { }
  }, (err) => {
    if (err) return done(err);

    selenium.start((err, child) => {
      if (err) return done(err);
      selenium.child = child;
      done();
    });
  });
});

gulp.task('acceptanceTest', ['selenium'], () => {
  var wdioCommand = 'wdio';
  if (os.platform() === 'win32') {
    wdioCommand = 'wdio.cmd';
  }
  return gulp.src(path.join(__dirname, 'wdio.conf.js'))
    .pipe(webdriver({
      wdioBin:  path.join(__dirname, 'node_modules', '.bin', wdioCommand)
    })).once('end', () => {
      selenium.child.kill();
    });
});
