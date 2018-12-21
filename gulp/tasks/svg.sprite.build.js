'use strict';

let svgPATH = {
		"input": "./source/img/sprite.svg",
	"output": $.config.root + "/assets/img"
	};

module.exports = function () {
	$.gulp.task('svg:sprite:build', () => {
		return $.gulp.src(svgPATH.input)
			.pipe($.gulp.dest(svgPATH.output));
	});
};
