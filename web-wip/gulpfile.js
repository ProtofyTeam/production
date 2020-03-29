var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

var compileLess = function() {
    return gulp.src([
        './css/css.less',
    ], { base: './' })
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(cleanCSS({ rebase: false}))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist'));
};

gulp.task('default', gulp.series(compileLess));
gulp.task('compileLess', gulp.series(compileLess));