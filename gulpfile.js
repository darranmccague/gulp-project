// Modules & Plugins
var gulp = require('gulp');
var concat = require('gulp-concat');
var myth = require('gulp-myth');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var imagemin = require('gulp-imagemin');

//Styles Taks
gulp.task('styles', function() {
	return gulp.src('app/css/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('dist'));

});



// Scripts Task
gulp.task('scripts', function() {
       gulp.src('app/js/*.js')
           .pipe(jshint())
           .pipe(jshint.reporter('default'))
    .pipe(concat('all.js'))
           .pipe(uglify())
           .pipe(gulp.dest('dist'));
});

// Images Task
gulp.task('images', function() {
    gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

// Watch Task
gulp.task('watch', function() {
       gulp.watch('app/css/*.css', 'styles');
       gulp.watch('app/js/*.js', 'scripts');
       gulp.watch('app/img/*', 'images');
});

// Default Task
gulp.task('default', gulp.parallel('styles', 'scripts', 'images', 'watch'));