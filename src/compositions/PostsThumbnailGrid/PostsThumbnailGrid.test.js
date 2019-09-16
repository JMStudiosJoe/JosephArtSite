import React from 'react';
import ReactDOM from 'react-dom';
import PostsThumbnailGrid from './PostsThumbnailGrid';

import renderer from 'react-test-renderer';

it('PostsThumbnailGrid renders correctly', () => {
    const tree = renderer
    .create(<PostsThumbnailGrid />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});