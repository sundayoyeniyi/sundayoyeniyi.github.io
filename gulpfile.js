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
        .src(config.cssSource)
        .pipe(plugins.plumber({
            handleError: errorHandler,
        }))
        .pipe(plugins.cssnano())
        .pipe(plugins.plumber.stop())
        .pipe(gulp.dest(config.buildStyles));
});

gulp.task('minify-js', () => {
    return gulp
        .src(config.jsSource)
        .pipe(plugins.plumber({
            handleError: errorHandler,
        }))
        .pipe(plugins.uglify())
        .pipe(plugins.plumber.stop())
        .pipe(gulp.dest(config.buildScript));
});

gulp.task('move-fonts', () => {
    return gulp
        .src(config.fontSource)
        .pipe(gulp.dest(config.fontDest));
});

gulp.task('compile-src', () => {
    return gulp
        .src(config.typescript.tscSourcePath)
        .pipe(plugins.changed(config.typescript.tscOutputPath))
        .pipe(plugins.plumber())
        .pipe(plugins.sourcemaps.init())
		.pipe(plugins.typescript(config.typescript.tscClientOptionFile))
		.pipe(plugins.sourcemaps.write('.'))
        .pipe(plugins.plumber.stop())
		.pipe(gulp.dest(config.typescript.tscOutputPath));
});

gulp.task('babel', () => {
    return gulp
        .src(config.babel.es6source)
        // .pipe(plugins.babel())
        .pipe(plugins.browserify())
        .pipe(plugins.rename(config.babel.output))
		.pipe(gulp.dest(config.babel.es5dest));
});

gulp.task('build', ['minify-css', 'minify-js', 'move-fonts'], () => {
    return gulp
        .src(config.htmlSource)
        .pipe(plugins.inject(gulp.src(config.stylesheets, { read: false }), {
            addRootSlash: false,
        }))
        .pipe(plugins.inject(gulp.src(config.javascript, { read: false }), {
            addRootSlash: false,
        }))
        .pipe(gulp.dest(config.htmlDest));
});

gulp.task('serve-dev', () => {
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
    gulp.watch(config.scssSource, ['compass-compile']);
    gulp.watch(config.typescript.tscSourcePath).on('change', ['compile-src']);
    gulp.watch(config.scriptSource).on('change', browsersync.reload);
    gulp.watch(config.htmlSource).on('change', browsersync.reload);
    gulp.watch(config.devStyles).on('change', browsersync.reload);
});

gulp.task('default', ['build']);
