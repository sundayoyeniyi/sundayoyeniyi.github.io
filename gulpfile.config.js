'use strict';
module.exports = function exports() {
    const source = 'src/sass/';
    const build = 'dist/';
    const styles = 'src/styles/';
    const config = {
        scssSource: source + '**/*.scss',
        buildSource: ['gulpfile.js', 'gulpfile.config.js', source + '**/*.js', '!node_modules/**'],
        scssCompiled: styles,
        cssSource: styles + '**/*.css',
        buildOut: build,
        buildStyles: build + 'styles',
    };
    return config;
};
