//load plugins
var gulp = require('gulp'),
	compass = require('gulp-compass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	minifyhtml = require('gulp-minify-html'),
	//jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify'),
	cache = require('gulp-cache'),
	refresh = require('gulp-livereload'),
	lr = require('tiny-lr'),
	server = lr();

//styles
gulp.task('styles', function() {
	return gulp.src(['src/sass/**/*.scss'])
		.pipe(compass({
			css: 'public_html/assets/css',
			sass: 'src/sass',
			image: 'public_html/assets/img'
		}))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('public_html/assets/css'))
		// .pipe(rename({ suffix: '.min' }))
		.pipe(minifycss())
		.pipe(gulp.dest('public_html/assets/css'))
		.pipe(refresh(server));
});

//scripts
gulp.task('scripts', function() {
	return gulp.src('src/js/**/*.js')
		//.pipe(jshint('.jshintrc'))
		//.pipe(jshint.reporter('default'))
		.pipe(concat('site.min.js'))
		.pipe(gulp.dest('public_html/assets/js'))
		// .pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest('public_html/assets/js'))
		.pipe(refresh(server));
});

//html
gulp.task('html', function() {
	return gulp.src('public_html/index.html')
		.pipe(refresh(server));
});

gulp.task('minifyhtml', function() {
  gulp.src('src/html/index.html')
    .pipe(minifyhtml())
    .pipe(gulp.dest('./'))
});

//images
// gulp.task('images', function() {
// 	return gulp.src('public_html/assets/img/**/*')
// 		.pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
// 		.pipe(refresh(server))
// 		.pipe(gulp.dest('public_html/assets/img'));
// });

//default task
gulp.task('default', [], function() {
	gulp.run('styles', 'scripts' ); //, 'images');
});

gulp.task('livereload', function(){
	server.listen(35729, function(err){
		if(err) return console.log(err);
	});
});

//watch
gulp.task('live', function() {
	gulp.run('livereload', 'styles');

	//watch .scss files
	gulp.watch('src/sass/**/*.scss', function(event) {
		gulp.run('styles');
	});

	// watch .js files
	gulp.watch('src/js/**/*.js', function(event) {
		gulp.run('scripts');
	});

	//watch image files
	// gulp.watch('public_html/assets/img/**/*', function(event) {
	// 	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	// 	gulp.run('images');
	// });

	//watch template files
	gulp.watch('src/html/index.html', function(event) {
		gulp.run('html');
		gulp.run('minifyhtml');
	});
});