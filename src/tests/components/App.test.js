import React from 'react';
import { shallow } from 'enzyme';
import App from './../../components/App';
import i18n from '../../translations/i18n';

test('should render App correctly', () => {
    const wrapper = shallow(<App i18n={i18n} />);
    expect(wrapper).toMatchSnapshot();
});
