var gulp = require('gulp');

gulp.task('hello', function(pFnDone) {
	console.log('Hello World');
	pFnDone();
});
