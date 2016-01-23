'use strict';
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({ lazy: true });
const config = require('./gulpfile.config')();
const browsersync = require('browser-sync').create();

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

gulp.task('minify-css', function minifycss() {
    return gulp
        .src(config.cssSource)
        .pipe(plugins.plumber({
            handleError: errorHandler,
        }))
        .pipe(plugins.cssnano())
        .pipe(plugins.plumber.stop())
        .pipe(gulp.dest(config.buildStyles));
});

gulp.task('build', ['minify-css'], function build() {
    return gulp
        .src(config.htmlSource)
        .pipe(plugins.inject(gulp.src(config.stylesheets, { read: false }), {
            addRootSlash: false,
        }))
        .pipe(gulp.dest(config.htmlDest));
});

gulp.task('serve-dev', function browserSync() {
    browsersync.init({
        server: { baseDir: './src/', index: 'index.html' },
        logLevel: 'debug',
        logPrefix: '[PROFILE] - ',
        open: false,
        reloadDelay: 2000,
        reloadDebounce: 2000,
        injectChanges: true,
        host: 'dev_svr',
    });
    gulp.watch(config.scssSource, ['sass-compile']);
    gulp.watch(config.htmlSource).on('change', browsersync.reload);
    gulp.watch(config.devStyles).on('change', browsersync.reload);
});

gulp.task('default', ['build']);
