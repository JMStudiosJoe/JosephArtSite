import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery';

import renderer from 'react-test-renderer';

it('Gallery renders correctly', () => {
    const tree = renderer
    .create(<Gallery />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});