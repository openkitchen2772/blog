import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

configure({ adapter: new Adapter() })

describe("<App />", () => {
    it('should render a <App /> as root element', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find("div").first().hasClass("App")).toEqual(true);
    });
})
