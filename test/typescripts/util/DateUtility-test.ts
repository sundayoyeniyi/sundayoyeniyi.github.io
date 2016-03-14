/// <reference path="../../../typings/main.d.ts" />
/// <reference path="../../../src/typescripts/util/DateUtility.ts" />

'use strict';
import { expect } from 'chai';
import { DateUtility } from '../../../src/typescripts/util/DateUtility';

const dateUtil: DateUtility.DateUtilities = new DateUtility.DateUtilities();
const time: Date = dateUtil.getCurrentDate();
describe('Date utility suite of tests', () => {
    it('Expects DateUtilities.getCurrentDate() to return curent date', () => {
        expect(time.getDate()).to.equal((new Date()).getDate());
        expect(time.getMonth()).to.equal((new Date()).getMonth());
        expect(time.getFullYear()).to.equal((new Date()).getFullYear());
    });
});
