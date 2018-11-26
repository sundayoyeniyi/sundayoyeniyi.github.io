import React from 'react';
import { shallow } from 'enzyme';
import Article from './../article';

describe('Article component test', () => {
    let wrapper;
    const sampleArticle = {
        source: 'test-source',
        title: 'test-title',
        description: 'test-description',
    };

    beforeAll(() => {
        wrapper = shallow(<Article { ...sampleArticle } />)
    });

    it('expect title props to be rendered as first anchor text', () => {
        expect(wrapper.find('a').at(0).text()).toBe('test-title');
    });

    it('expect source props to be rendred as first anchor href', () => {
        expect(wrapper.find('a').at(0).props().href).toBe('test-source');
    });

    it('expect description props to be rendered as first parapgraph text', () => {
        expect(wrapper.find('p').at(0).text()).toBe('test-description');
    });
})