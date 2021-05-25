import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from '../index';

describe('<Header />', () => {
    afterAll(cleanup);

    test('Rendered Snapshot Matches', () => {
        const header = render(<Header />);
        expect(header).toMatchSnapshot();
    });

    test('Heading is displayed', () => {
        const { getByTestId } = render(<Header />);
        expect(getByTestId('heading').querySelector('h1')).toHaveTextContent(
            'Car Hire – Search, Compare & Save',
        );
    });
});
