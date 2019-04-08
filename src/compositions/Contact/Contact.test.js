import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './Contact';

import renderer from 'react-test-renderer';

it('InformationalResources renders correctly', () => {
    const tree = renderer
    .create(<Contact />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});