import React from 'react';
import ReactDOM from 'react-dom';
import Galleries from './Galleries';

import renderer from 'react-test-renderer';

it('Galleries renders correctly', () => {
    const tree = renderer
    .create(<Galleries />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});