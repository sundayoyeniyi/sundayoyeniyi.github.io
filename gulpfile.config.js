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
        jsSource: 'src/scripts/**/*.js',
        buildOut: build,
        buildStyles: build + 'styles',
        buildScript: build + 'scripts',
        devStyles: styles + 'styles.css',
        stylesheets: build + 'styles/styles.css',
        javascript: build + 'scripts/script.js',
        scriptSource: './src/scripts/**/*.js',
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
        babel: {
            es6source: ['src/typescripts/output.js'],
            es5dest: 'src/scripts/',
            output: 'scripts.js',
        },
    };
    return config;
};
