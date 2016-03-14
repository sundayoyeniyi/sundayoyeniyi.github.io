'use strict';
import * as fs from 'fs';
import * as chai from 'chai';
const expect: any = chai.expect;

const script: boolean = fs.existsSync('./dist/scripts/script.js');
const style: boolean = fs.existsSync('./dist/styles/styles.css');

describe('File existence suite of tests', () => {
    it('Expects script.js to exist in dist/scripts folder', () => {
        expect(script).to.equal(true);
    });
    it('Expects style.css to exist in dist/styles folder', () => {
        expect(style).to.equal(true);
    });
});
