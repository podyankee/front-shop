'use strict';

let uglify = require('gulp-uglify-es').default;

module.exports = function() {
  $.gulp.task('js:process:dev', function() {
    return $.gulp.src($.path.app)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.rename('app.min.js'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/js'))
	});
	$.gulp.task('js:process:build', function() {
			return $.gulp.src($.path.app)
				.pipe($.gp.rename('app.min.js'))
				.pipe($.gulp.dest($.config.root + '/assets/js'))
	});

	$.gulp.task('js:process:build-min', function () {
		return $.gulp.src($.path.app)
			.pipe($.gp.rename('app.min.js'))
			.pipe(uglify())
			.pipe($.gulp.dest($.config.root + '/assets/js'))
	});

};
