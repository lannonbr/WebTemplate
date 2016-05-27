var gulp = require('gulp'),
  $ = require('gulp-load-plugins')();

gulp.task('sass', function() {
  return gulp.src("./sass/main.scss")
    .pipe($.sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest("./css"));
});

gulp.task('pug', function() {
  return gulp.src("./pug/*.pug")
    .pipe($.pug({pretty: true}))
    .pipe(gulp.dest("./"));
});

gulp.task('watch', function() {
	gulp.watch(['./sass/*.scss', './sass/**/*.scss'], ['sass']);
	gulp.watch('./pug/*.pug', ['pug']);
});

gulp.task('default', ['watch']);
