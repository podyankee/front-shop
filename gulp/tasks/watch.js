'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js:process:dev'));
    //$.gulp.watch('./config-grid.js', $.gulp.series('grid'));
    $.gulp.watch('./source/style/**/*.sass', $.gulp.series('sass:dev'));
    $.gulp.watch('./source/template/**/*.pug', $.gulp.series('pug:dev'));
    $.gulp.watch('./source/images/**/*.*', $.gulp.series('copy:image:dev'));
  });
};
