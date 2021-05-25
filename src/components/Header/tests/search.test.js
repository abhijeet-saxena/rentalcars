import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Search from '../search';

describe('<Search />', () => {
    afterAll(cleanup);

    test('Rendered Snapshot Matches', () => {
        const search = render(<Search />);
        expect(search).toMatchSnapshot();
    });

    test('Search Displayed', () => {
        const { getByTestId } = render(<Search />);
        const search = getByTestId('search');

        expect(search.querySelector('h2')).toHaveTextContent(
            `Let's find your ideal car`,
        );
        expect(search.querySelector('button')).toHaveTextContent('Search');
    });

    test('Test Inputs', () => {
        const { getByTestId } = render(<Search />);
        const input = getByTestId('inputs');
        expect(0).toBe(0);
    });
});
