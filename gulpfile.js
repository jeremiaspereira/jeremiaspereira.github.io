var gulp        = require('gulp'),
	plumber     = require('gulp-plumber'),
	browserSync = require('browser-sync'),
	sass        = require('gulp-sass'),
	concat      = require('gulp-concat'),
	exec        = require('child_process').exec;


var messages = {
	jekyllBuild: '<div style="color:#8ABEBC;">Running: $jekyll build</div> '
};



/**
 * Build the Jekyll Site
 */

gulp.task('jekyll', function (){
	browserSync.notify(messages.jekyllBuild);
	exec('jekyll build --watch --incremental', function(err, stdout, stderr) {
	    console.log(stdout);
	});
});

gulp.task('jekyll-rebuild', ['jekyll'], function () {
	browserSync.reload();
});


gulp.task('site-reload', function () {
  browserSync.reload();
});

gulp.task('browser-sync', ['jekyll'], function() {
	browserSync({
		server: {
			baseDir: '_site'
		}
	});
});


/* Concatena os scss e gera um css*/
gulp.task('sass', function(){
  return gulp.src('./assets/sass/*.scss')
    .pipe(plumber())
    .pipe(concat('main.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('_site/css/'))
});


gulp.task('watch', function () {
	gulp.watch('_sass/*.scss', ['sass']);
  gulp.watch(['_site/css/*.css'], ['site-reload']);
	gulp.watch(['css/*', '*.md', '*.html', '_includes/*.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
});


gulp.task('default', ['browser-sync', 'watch']);
