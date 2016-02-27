'use strict';
module.exports = () => {
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
        devStyles: styles + 'styles.css',
        stylesheets: build + 'styles/styles.css',
        htmlSource: './src/index.html',
        htmlDest: '.',
        fontSource: './src/fonts/**/*.*',
        fontDest: build + 'fonts/',
        compass: {
            css: styles,
            sass: source,
            image: 'src/images/',
            font: 'src/fonts/',
            require: ['susy', 'breakpoint'],
        },
        typescript: {
            tscSourcePath: 'src/typescripts/**/*.ts',
            tscOutputPath: 'src/scripts/',
            tscClientOptionFile: 'src/typescripts/tsconfig.json',
        },
    };
    return config;
};
