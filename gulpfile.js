var gulp,sass,webserver;
    gulp = require('gulp');
    sass = require('gulp-sass');
    webserver = require('gulp-webserver');

//Sass
gulp.task('sass',function(){
  gulp.src('./sass/*.scss')
    .pipe(sass({style : 'expanded'}))
    .pipe(gulp.dest('./app/css'));
});

//ローカルサーバー
gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true
    }));
});

//ファイルの監視
gulp.task('watch',function(){
    gulp.watch(['./sass/*.scss'],['sass']);
});

gulp.task('default',['watch','sass','webserver']);