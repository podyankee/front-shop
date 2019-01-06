'use strict';

module.exports = function() {
  $.gulp.task('pug:dev', function() {
    //var locals = require('../../content.json');
    var fs = require('fs');
    return $.gulp.src('./source/template/pages/*.pug')
      .pipe($.gp.pug({ 
       locals :{
          content: JSON.parse(fs.readFileSync('./data/content.json', 'utf8')),
        } 
        //locals: locals
        , pretty: true }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
			.pipe($.gulp.dest($.config.root));
  });
  $.gulp.task('pug:build', function() {
    //var locals = require('../../content.json');
    var fs = require('fs');
    return $.gulp.src('./source/template/pages/*.pug')
      .pipe($.gp.pug({ 
       locals :{
          content: JSON.parse(fs.readFileSync('./data/content.json', 'utf8')),
        } 
        //locals: locals
        }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
			.pipe($.gulp.dest($.config.root));
  });
};
