import React from 'react';
import renderer from 'react-test-renderer';
import Match from '../../components/Match';

it('renders correctly', () => {
    const match = {
        display_name: 'Martha',
        job_title: 'Lawyer',
        city: {
            name: 'New York',
        },
        age: 28,
        main_photo: 'http://thecatapi.com/api/images/get?format=src&type=gif',
        height_in_cm: '173cm',
        compatibility_score: 0.75,
        contacts_exchanged: 3,
        religion: 'Atheist'
    };
    const tree = renderer
        .create(<Match {...match} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
