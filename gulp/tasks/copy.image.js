'use strict';

let imagemin = require('gulp-imagemin'),
	imageminJpegRecompress = require('imagemin-jpeg-recompress'),
	pngquant = require('imagemin-pngquant'),
	cache = require('gulp-cache'),
	imgPATH = {
		"input": "./source/img/**/*",
		"output": "/assets/img"
	};

module.exports = function () {
	$.gulp.task('copy:image:dev', () => {
		return $.gulp.src(imgPATH.input)
			.pipe($.gulp.dest($.config.root + "/assets/img"));
	});

	$.gulp.task('copy:image:build', () => {
		return $.gulp.src([imgPATH.input, "!./source/img/sprite.svg"])
			.pipe(cache(imagemin([
				imagemin.gifsicle({ interlaced: true }),
				imagemin.jpegtran({ progressive: true }),
				imageminJpegRecompress({
					loops: 5,
					min: 70,
					max: 75,
					quality: 'medium'
				}),
				imagemin.svgo({
					plugins: [
						{ removeViewBox: true },
						{ cleanupIDs: false },
						{ removeUnknownsAndDefaults: false },
						{ cleanupIDs: false },
						{ collapseGroups: false },
						{ mergePaths: false },
						{ removeUselessDefs: false }
					]
				}),
				imagemin.optipng({ optimizationLevel: 3 }),
				pngquant({ quality: '65-70', speed: 5 })
			], {
					verbose: true
				})))
			.pipe($.gulp.dest($.config.root + "/assets/img"));
	});
};
