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
gulp.task('sass-compile', () => {
    return gulp
        .src(config.scssSource)
        .pipe(plugins.plumber({
            handleError: errorHandler,
        }))
        .pipe(plugins.sass())
        .pipe(plugins.plumber.stop())
        .pipe(gulp.dest(config.scssCompiled));
});

gulp.task('compass-compile', () => {
    return gulp
        .src(config.scssSource)
        .pipe(plugins.plumber({
            errorHandler: (error) => {
                console.log(error.message);
                this.emit('end');
            },
        }))
        .pipe(plugins.compass({
            css: config.compass.css,
            sass: config.compass.sass,
            image: config.compass.image,
            font: config.compass.font,
            require: config.compass.require,
        }))
        .pipe(plugins.plumber.stop())
        .pipe(gulp.dest(config.scssCompiled));
});

gulp.task('minify-css', () => {
    return gulp
        .src(config.stylesheets)
        .pipe(plugins.plumber({
            handleError: errorHandler,
        }))
        .pipe(plugins.cssnano())
        .pipe(plugins.plumber.stop())
        .pipe(gulp.dest(config.distStyles));
});

gulp.task('minify-js', () => {
    return gulp
        .src(config.javascript)
        .pipe(plugins.plumber({
            handleError: errorHandler,
        }))
        .pipe(plugins.uglify())
        .pipe(plugins.plumber.stop())
        .pipe(gulp.dest(config.distScript));
});

gulp.task('build-fonts', () => {
    return gulp
        .src(config.fontSource)
        .pipe(gulp.dest(config.buildFonts));
});

gulp.task('dist-fonts', () => {
    return gulp
        .src(config.fontSource)
        .pipe(gulp.dest(config.distFonts));
});

gulp.task('build-images', () => {
    return gulp
        .src(config.fontSource)
        .pipe(gulp.dest(config.buildFonts));
});

gulp.task('dist-images', () => {
    return gulp
        .src(config.imgSource)
        .pipe(gulp.dest(config.distImages));
});

gulp.task('build-styles', () => {
    return gulp
        .src(config.cssSource)
        .pipe(gulp.dest(config.buildStyles));
});

gulp.task('dist-styles', ['minify-css']);

gulp.task('dist-scripts', ['minify-js']);

gulp.task('build', ['build-fonts', 'build-images', 'build-styles'], () => {
    return gulp
        .src(config.htmlSource)
        .pipe(plugins.inject(gulp.src(config.stylesheets, { read: false }), {
            addRootSlash: false,
            ignorePath: config.buildOut,
        }))
        .pipe(plugins.inject(gulp.src(config.javascript, { read: false }), {
            addRootSlash: false,
            ignorePath: config.buildOut,
        }))
        .pipe(gulp.dest(config.buildIndex));
});

gulp.task('dist', ['dist-fonts', 'dist-images', 'dist-styles', 'dist-scripts'], () => {
    return gulp
        .src(config.htmlSource)
        .pipe(plugins.inject(gulp.src(config.distStyleSheet, { read: false }), {
            addRootSlash: false,
        }))
        .pipe(plugins.inject(gulp.src(config.distJavaScript, { read: false }), {
            addRootSlash: false,
        }))
        .pipe(gulp.dest(config.htmlDest));
});

gulp.task('serve-build', ['build'], () => {
    browsersync.init({
        server: { baseDir: './build/src/', index: 'index.html' },
        logLevel: 'debug',
        logPrefix: '[BUILD] - ',
        open: false,
        reloadDelay: 2000,
        reloadDebounce: 2000,
        injectChanges: true,
        host: 'dev_svr',
    });
    gulp.watch(config.scssSource, ['compass-compile']);
    gulp.watch(config.buildScript).on('change', browsersync.reload);
    gulp.watch(config.buildIndex).on('change', browsersync.reload);
    gulp.watch(config.buildStyles).on('change', browsersync.reload);
});

gulp.task('serve-dist', ['dist'], () => {
    browsersync.init({
        server: { baseDir: './', index: 'index.html' },
        logLevel: 'debug',
        logPrefix: '[DIST] - ',
        open: false,
        reloadDelay: 2000,
        reloadDebounce: 2000,
        injectChanges: true,
        host: 'dev_svr',
    });
});

gulp.task('default', ['serve-build']);
