import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../index';

describe('Footer component test', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = shallow(<Footer />);
    });

    it('expect a single footer tag with two divs', () => {
        expect(wrapper.find('footer')).toHaveLength(1);
        expect(wrapper.find('footer').find('div')).toHaveLength(2);
    });
});
