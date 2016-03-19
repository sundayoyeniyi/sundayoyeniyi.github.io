'use strict';
module.exports = () => {
    const source = 'src/sass/';
    const build = 'build/src/';
    const dist = 'dist/';
    const styles = 'src/styles/';
    const config = {
        scssSource: source + '**/*.scss',
        buildSource: ['gulpfile.js', 'gulpfile.config.js', source + '**/*.js', '!node_modules/**'],
        scssCompiled: styles,
        jsSource: 'src/scripts/**/*.js',
        buildOut: build,
        distOut: dist,
        devStyles: styles + 'styles.css',
        scriptSource: './src/scripts/**/*.js',
        htmlSource: './src/index.html',
        htmlDest: '.',
        fontSource: './src/fonts/**/*.*',
        buildFonts: build + 'fonts/',
        distFonts: dist + 'fonts/',
        imgSource: './src/images/**/*.*',
        buildImages: build + 'images/',
        distImages: dist + 'images/',
        cssSource: styles + '**/*.css',
        buildStyles: build + 'styles',
        distStyles: dist + 'styles',
        buildScript: build + 'scripts',
        distScript: dist + 'scripts',
        buildIndex: './' + build,
        distIndex: './' + dist,
        stylesheets: build + 'styles/styles.css',
        javascript: build + 'scripts/bundle.js',
        distStyleSheet: dist + 'styles/styles.css',
        distJavaScript: dist + 'scripts/bundle.js',
        compass: {
            css: styles,
            sass: source,
            image: 'src/images/',
            font: 'src/fonts/',
            require: ['susy', 'breakpoint'],
        },
    };
    return config;
};
