'use strict';

let plumber = require('gulp-plumber'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	csscomb = require('gulp-csscomb'),
	sourcemaps = require('gulp-sourcemaps'),
	gcmq = require('gulp-group-css-media-queries'),
	rename = require('gulp-rename'),
	stylesPATH = {
		"input": "./source/style/app.sass",
		"output": "/assets/css"
	};


module.exports = function () {
	$.gulp.task('sass:dev', () => {
		return $.gulp.src(stylesPATH.input)
			.pipe(plumber())
			.pipe(sourcemaps.init())
			.pipe($.gp.sass())
			//.pipe(gcmq())
			.pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
			.pipe(sourcemaps.write())
			.pipe(rename('app.min.css'))
			.pipe($.gulp.dest($.config.root +"/assets/css"))
			.on('end', $.browserSync.reload);
	});
	$.gulp.task('sass:build', () => {
		return $.gulp.src(stylesPATH.input)
			.pipe(sourcemaps.init())
			.pipe($.gp.sass())
			.pipe(gcmq())
			.pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
			.pipe(sourcemaps.write())
			.pipe(cleanCSS({ level: 2 }))
			.pipe($.gulp.dest($.config.root +"/assets/css"))
	});
	$.gulp.task('sass:build-min', () => {
		return $.gulp.src(stylesPATH.input)
			.pipe($.gp.sass())
			.pipe(gcmq())
			.pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
			.pipe(csscomb())
			.pipe(cleanCSS({ level: 2 }))
			.pipe(rename('app.min.css'))
			.pipe($.gulp.dest($.config.root + "/assets/css"))
	});
};
