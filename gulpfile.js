var gulp        = require('gulp'),
	plumber     = require('gulp-plumber'),
	browserSync = require('browser-sync'),
	sass        = require('gulp-sass'),
	concat      = require('gulp-concat'),
	del         = require('del'),
	gutil       = require('gulp-util'),
	exec        = require('child_process').exec;

// Configs gulp
var config = require('./gulp.config.js');


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
  return gulp.src('./_sass/_main.scss')
    .pipe(plumber())
    .pipe(concat('main.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('_site/css/'))
});


gulp.task('watch', function () {
	gulp.watch('_sass/*.scss', ['jekyll-rebuild', 'site-reload']);
	gulp.watch(['css/*', '*.md', '*.html', '_includes/*.html', '_layouts/*.html', '_posts/*', 'categoria/*.html'], ['jekyll-rebuild']);
});


/**
 * Task to cleanup every files
 */
gulp.task('clean', function(done) {
  gutil.log('Cleaning ...', gutil.colors.green(config.site));
  return del([
    config.paths.html,
		config.paths.css,
		config.paths.xml,
		config.paths.assets
  ]);
  done();
});

gulp.task('default', ['clean','browser-sync','jekyll-rebuild', 'watch']);
