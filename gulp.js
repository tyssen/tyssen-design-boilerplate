//load plugins
var gulp = require('gulp'),
	compass = require('gulp-compass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
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
	return gulp.src(['src/scss/**/*.scss'])
		.pipe(compass({
			css: 'html/css',
			sass: 'src/scss',
			image: 'html/images'
		}))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('html/css'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(minifycss())
		.pipe(gulp.dest('html/css'))
		.pipe(refresh(server));
});

//scripts
gulp.task('scripts', function() {
	return gulp.src('src/js/**/*.js')
		//.pipe(jshint('.jshintrc'))
		//.pipe(jshint.reporter('default'))
		.pipe(concat('main.js'))
		.pipe(gulp.dest('html/js'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest('html/js'))
		.pipe(refresh(server));
});

//html
gulp.task('html', function() {
	return gulp.src('templates/**/*.html')
		.pipe(refresh(server));
});

//images
gulp.task('images', function() {
	return gulp.src('html/images/**/*')
		.pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
		.pipe(refresh(server))
		.pipe(gulp.dest('html/images'));
});

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
	gulp.watch('src/scss/**/*.scss', function(event) {
		gulp.run('styles');
	});

	//watch .js files
	gulp.watch('src/js/**/*.js', function(event) {
		gulp.run('scripts');
	});

	//watch image files
	//gulp.watch('html/images/**/*', function(event) {
	//	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	//	gulp.run('images');
	//});

	//watch template files
	gulp.watch('templates/**/*.html', function(event) {
		gulp.run('html');
	});
});