'use strict';

module.exports = function() {
  $.gulp.task('css:vendor', function() {
    return $.gulp.src($.path.cssVendor)
      .pipe($.gp.concatCss('vendor.min.css'))
      .pipe($.gp.csso())
      .pipe($.gulp.dest($.config.root + '/assets/css'))
  });
};
