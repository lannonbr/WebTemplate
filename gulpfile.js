var gulp = require('gulp'),
  plugins = require('gulp-load-plugins')(),
  browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src("./sass/app.scss")
    .pipe(plugins.sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
});

gulp.task('pug', function() {
  return gulp.src("./pug/*.pug")
    .pipe(plugins.pug({pretty: true}))
    .pipe(gulp.dest("./"))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  browserSync.init({
    server: './'
  });

	gulp.watch(['./sass/main.scss', './sass/**/*.scss'], ['sass']);
	gulp.watch('./pug/*.pug', ['pug']);
  gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', ['watch']);
