import React from 'react';
import { shallow } from 'enzyme';
import Home from '../index';
import Header from '../header';
import Articles from '../articles';
import Footer from '../footer';

describe('Home component UI test', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = shallow(<Home />);
    });

    it('expects a Header component to be present on the home page', () => {
        expect(wrapper.find(Header)).toHaveLength(1);
    });
    it('expect Articles coponent to be present on the home page', () => {
        expect(wrapper.find(Articles)).toHaveLength(1);
    });
    it('expect a Footer coponent to be present on the home page', () => {
        expect(wrapper.find(Footer)).toHaveLength(1);
    });
});
