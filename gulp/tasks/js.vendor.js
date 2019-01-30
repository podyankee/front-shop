'use strict';

let uglify = require('gulp-uglify-es').default,
		concat = require('gulp-concat')

module.exports = function() {
  $.gulp.task('js:vendor:dev', function() {
    return $.gulp.src($.path.jsVendor)
      .pipe($.gp.concat('vendor.min.js'))
			.pipe($.gulp.dest($.config.root + '/assets/js'))
	});

  $.gulp.task('js:vendor:build', function() {
    return $.gulp.src($.path.jsVendor)
			.pipe($.gp.concat('vendor.min.js'))
			.pipe(uglify())
      .pipe($.gulp.dest($.config.root + '/assets/js'))
	});

	
};
