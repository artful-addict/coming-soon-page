var gulp = require('gulp');

var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('build/assets/scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('build/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'build'
    },
  })
});

gulp.task('watch',['browserSync', 'sass'], function() {
  gulp.watch('build/assets/scss/**/*.scss', ['sass']);
  gulp.watch('build/*.html', browserSync.reload);
  gulp.watch('build/behaviors/*.js', browserSync.reload);
  // Other watchers
});