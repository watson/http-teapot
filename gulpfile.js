var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

gulp.task('default', function () {
  var bundler = browserify({
    entries: ['./teapot.js'],
    debug: true
  });

  var bundle = function() {
    return bundler
      .bundle()
      .pipe(source('teapot.min.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest('./'));
  };

  return bundle();
});
