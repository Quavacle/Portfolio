const gulp = require('gulp')
gulp.task('autoprefixer', () => {
  const autoprefixer = require('autoprefixer')
  const sourcemaps = require('gulp-sourcemaps')
  const postcss = require('gulp-postcss')

  return gulp
    .src('./css/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css/build'))
})
