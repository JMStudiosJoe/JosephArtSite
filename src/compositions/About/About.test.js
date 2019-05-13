import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';

import renderer from 'react-test-renderer';

it('About renders correctly', () => {
    const tree = renderer
    .create(<About />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});