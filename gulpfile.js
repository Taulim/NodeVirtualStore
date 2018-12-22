var gulp = require('gulp');
//var gulpConcat = require('gulp-concat');

gulp.task('hello', function(pFnDone) {
	console.log('Hello World');
	pFnDone();
});

gulp.task('js', function(pFnDone) {
	!(gulp.src('app/js/*.js')
		//.pipe(gulpConcat('scripts.js'))
		.pipe(gulp.dest('dist/js'))
	);
	pFnDone();
})

gulp.task('default', gulp.series('js','hello'));