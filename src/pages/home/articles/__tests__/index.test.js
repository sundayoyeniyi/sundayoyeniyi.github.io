import React from 'react';
import { shallow } from 'enzyme';
import Articles from './../index';
import Article from './../article';

describe('Articles component test', () => {

    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<Articles />);
    });

    it('expect four default articles to displayed', () => {
        expect(wrapper.find(Article)).toHaveLength(4);
    });
});
