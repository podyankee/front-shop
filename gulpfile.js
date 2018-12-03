'use strict';

global.$ = {
 
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsVendor: require('./gulp/paths/js.vendor.js'),
    cssVendor: require('./gulp/paths/css.vendor.js'),
    app: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')(),
 
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
	'clean',
	$.gulp.parallel(
		'pug:dev',
		'copy:font',
		'css:vendor',
		'sass:dev',
		'copy:image:dev',
		'js:vendor:dev',
		'js:process:dev'
	)
));

$.gulp.task('build', $.gulp.series(
	'clean',
	$.gulp.parallel(
		'pug:build',
		'copy:font',
		'css:vendor',
		'sass:build-min',
		'copy:image:build',
		'js:vendor:build',
		'js:process:build-min'
	)
));

$.gulp.task('default', $.gulp.series(
	'dev',
	$.gulp.parallel(
		'watch',
		'serve'
	)
));
