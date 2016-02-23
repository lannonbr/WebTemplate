var gulp = require('gulp'),
  sass = require('gulp-sass'),
  jade = require('gulp-jade');

gulp.task('sass', function() {
  return gulp.src("./sass/main.scss")
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest("./css"));
});

gulp.task('jade', function() {
  return gulp.src("./jade/*.jade")
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest("./"));
});

gulp.task('watch', function() {
	gulp.watch(['./sass/*.scss', './sass/**/*.scss'], ['sass']);
	gulp.watch('./jade/*.jade', ['jade']);
});
