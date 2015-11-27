'use strict';

var gulp          = require('gulp'),
    obfuscate     = require('gulp-obfuscate'),
    ghPages       = require('gulp-gh-pages');


// Place on Github Pages for me
gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
  .pipe(ghPages());
});



gulp.task('default', function () {
  return  gulp.src('./dist/js/insta-min.js')
          .pipe(obfuscate({
            exclude: ['a']
          }))
          .pipe(gulp.dest('dist/js'));
});
