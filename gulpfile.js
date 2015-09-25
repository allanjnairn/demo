var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');


gulp.task('sass', function() {
	gulp.src('./scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'))
		.pipe(livereload());
});

gulp.task('html', function() {
	 return gulp.src([
        './index.html'
    ])
    .pipe(livereload());
});


gulp.task('sass:watch', function(){
	livereload.listen();
	gulp.watch('./*.html', ['html']);
	gulp.watch('./scss/*.scss', ['sass']);
});

