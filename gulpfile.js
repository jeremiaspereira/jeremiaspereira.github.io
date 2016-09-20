var gulp      = require('gulp'),
	plumber     = require('gulp-plumber'),
	browserSync = require('browser-sync'),
	sass        = require('gulp-sass'),
	concat      = require('gulp-concat'),
	rename = require("gulp-rename"),
	cp          = require('child_process').spawn;

var messages = {
	jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};


gulp.task('jekyll-build', function (done) {
	browserSync.notify(messages.jekyllBuild);
	return cp('jekyll.bat', ['build'], {stdio: 'inherit'})
		.on('close', done);
});


gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
	browserSync.reload();
});


gulp.task('site-reload', function () {
  browserSync.reload();
});

gulp.task('browser-sync', ['jekyll-build'], function() {
	browserSync({
		server: {
			baseDir: '_site'
		}
	});
});


/* Concatena os scss e gera um css*/
gulp.task('sass', function(){
  return gulp.src('_sass/*.scss')
    .pipe(plumber())
    .pipe(concat('main.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('_site/css/'))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('_site/assets/css/'))
});

gulp.task('watch', function () {
  gulp.watch('_sass/*.scss', ['sass']);
	gulp.watch('_site/*', ['sass']);
  gulp.watch(['_site/assets/css/*.css'], ['site-reload']);
	gulp.watch(['*.html', '_includes/*.html', '_layouts/*.html','_posts/*', 'assets/js/*', 'assets/img/*'], ['jekyll-rebuild']);
});


gulp.task('default', ['browser-sync', 'watch']);
