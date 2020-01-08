import React from 'react';
import ReactDOM from 'react-dom';
import Posts from './Posts';

import renderer from 'react-test-renderer';

it('Posts list renders correctly', () => {
    const tree = renderer
    .create(<Posts />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});