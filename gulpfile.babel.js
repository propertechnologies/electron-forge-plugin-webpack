const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('build', () =>
    gulp.src('./src/**/*.js')
      .pipe(babel())
      .pipe(gulp.dest('./dist'))
);

gulp.task('watch', gulp.series(gulp.parallel('build')), () => {
  gulp.watch('./src/**/*.js', ['transpile']);
});
