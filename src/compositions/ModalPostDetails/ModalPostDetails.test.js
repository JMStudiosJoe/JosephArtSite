import React from 'react';
import ReactDOM from 'react-dom';
import ModalPostDetails from './ModalPostDetails';

import renderer from 'react-test-renderer';

it('ModalPostDetails renders correctly', () => {
    const tree = renderer
    .create(<ModalPostDetails />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});