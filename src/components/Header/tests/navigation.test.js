import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Navigation from '../navigation';

describe('<Navigation />', () => {
    afterAll(cleanup);

    test('Rendered Snapshot Matches', () => {
        const navigation = render(<Navigation />);
        expect(navigation).toMatchSnapshot();
    });

    test('Main Logo and Link', () => {
        const { getByTestId } = render(<Navigation />);
        const navigation = getByTestId('navigation');

        expect(navigation).toBeInTheDocument();
        expect(navigation.querySelector('button')).toHaveTextContent(
            'Manage Booking',
        );
        expect(navigation.querySelector('a')).toHaveAttribute(
            'href',
            '/rentalcars',
        );
    });

    test('Hamburger Menu Test', () => {
        const { getByTestId, queryByTestId } = render(<Navigation />);
        const navigation = getByTestId('navigation');
        const hamburger = navigation.querySelector('.hamburger');

        expect(queryByTestId('drawer')).toBeNull();
        fireEvent.click(hamburger);
        expect(getByTestId('drawer')).toBeInTheDocument();
    });
});
