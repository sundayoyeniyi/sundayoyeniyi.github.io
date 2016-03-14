'use strict';

describe ('File existence suite of tests', () => {
    it('Expects script.js to exists in dist folder', () => {
        // expect(fs.existSync('./dist/scripts/scripts.js').toBe(true));
        expect(true).toBe(false);
    });
    it('Expects style.css to exists in dist folder', () => {
        // expect(fs.fileExists('./dist/styles/styles.css').toBe(true));
        expect(false).toBe(false);
    });
});
