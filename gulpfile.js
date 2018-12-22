var gulp = require('gulp');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

gulp.task('sass', function(pFnDone) {
	!(gulp.src('app/scss/**/*.scss')
		.pipe(sass())
		.pipe(concat('scssStyles.css'))
		.pipe(gulp.dest('app/css'))
	);
	pFnDone();
});

gulp.task('css', function(pFnDone) {
	!(gulp.src('app/css/**/*.css')
		.pipe(concat('styles.css'))
		.pipe(gulp.dest('dist/css'))
	);
	pFnDone();
});

gulp.task('coffee', function(pFnDone) {
	!(gulp.src('app/coffee/**/*.coffee')
		.pipe(coffee())
		.pipe(concat('coffeeScripts.js'))
		.pipe(gulp.dest('app/js'))
	);
	pFnDone();
});

gulp.task('js', function(pFnDone) {
	!(gulp.src('app/js/*.js')
		.pipe(concat('scripts.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
	);
	pFnDone();
});

gulp.task('watch', function(pFnDone) {
	gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
	gulp.watch('app/css/**/*.css', gulp.series('css'));
	gulp.watch('app/coffee/**/*.coffee', gulp.series('coffee'));
	gulp.watch('app/js/**/*.js', gulp.series('js'));
	//pFnDone();
});

gulp.task('build', gulp.series(gulp.parallel(gulp.series('sass','css'), gulp.series('coffee', 'js'))));

gulp.task('dev', gulp.series('build', 'watch'));

gulp.task('default', gulp.series('build'));