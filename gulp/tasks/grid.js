'use strict';

var smartgrid = require('smart-grid');

module.exports = function () {
	$.gulp.task('grid', function (done) {
		let gridOptions = {
			filename: "_smart-grid",
			outputStyle: "sass",
			columns: 12,
			offset: "20px",
			container: {
				maxWidth: "1240px",
				fields: "80px"
			},
			breakPoints: {
				xl: {
					width: "1300px",
					fields: "80px"
				},
				lg: {
					width: "1200px"
				},
				md: {
					width: "768px",
					fields: "80px"
				},
				sm: {
					width: "560px"
				},
				xs: {
					width: "480px"
				}
			}
		};
		smartgrid('./source/style/layout', gridOptions);
		done();
		return $.gulp.dest('./source/style/helpers');
	});
};

