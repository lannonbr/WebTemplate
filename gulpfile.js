var gulp = require('gulp'),
  plugins = require('gulp-load-plugins')(),
  browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src("./sass/main.scss")
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
});

gulp.task('jade', function() {
  return gulp.src("./jade/*.jade")
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest("./"));
});

gulp.task('watch', function() {
  browserSync.init({
    server: './'
  });

	gulp.watch(['./sass/main.scss', './sass/**/*.scss'], ['sass']);
	gulp.watch('./jade/*.jade', ['jade']);
  gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', ['watch']);
