var gulp = require('gulp');

gulp.task('hello', function(pFnDone) {
	console.log('Hello World');
	pFnDone();
});

gulp.task('default', gulp.series('hello'));