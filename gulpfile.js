'use strict';
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({ lazy: true });
const config = require('./gulpfile.config')();

/*
 * utility functions
 */
function errorHandler(error) {
    console.log(error);
    this.emit('end');
}

/*
 * gulp tasks
 */
gulp.task('sass-compile', function sassCompile() {
    return gulp
        .src(config.scssSource)
        .pipe(plugins.plumber({
            handleError: errorHandler,
        }))
        .pipe(plugins.sass())
        .pipe(plugins.plumber.stop())
        .pipe(gulp.dest(config.scssCompiled));
});

gulp.task('sass-watch', function sassWatch() {
    gulp.watch(config.scssSource, { debounceDelay: 50000 }, ['sass-compile']);
});

gulp.task('build', function build() {
    console.log('build task is **Work in progress...**');
});

gulp.task('watch', ['sass-watch']);
gulp.task('default', ['build']);
