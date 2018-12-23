import React from 'react';
import renderer from 'react-test-renderer';
import Matches from "../../containers/Matches";

it('renders correctly', () => {
    const tree = renderer
        .create(<Matches />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
