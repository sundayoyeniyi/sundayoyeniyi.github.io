import React from 'react';
import { shallow } from 'enzyme';
import Header from '../index';

describe('Header component test', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = shallow(<Header />);
    });

    it('expect a header tag with an hgroup containing two divs', () => {
        expect(wrapper.find('header')).toHaveLength(1);
        expect(wrapper.find('header').find('hgroup')).toHaveLength(1);
        expect(wrapper.find('header').find('hgroup').find('div')).toHaveLength(2);
    });
});
