import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PromoSection from '../index';

describe('<PromoSection />', () => {
    afterAll(cleanup);

    test('Showcase Displayed', () => {
        const { getByTestId } = render(<PromoSection />);
        const showcase = getByTestId('showcase-container');

        expect(showcase).toBeInTheDocument();
        expect(showcase.querySelector('h3')).toHaveTextContent(
            'Rentalcars.com connects you to the biggest brands in car hire',
        );
    });

    test('Features Displayed', () => {
        const { getByTestId } = render(<PromoSection />);
        const features = getByTestId('features-container');

        expect(features).toBeInTheDocument();
        expect(features.querySelector('h3')).toHaveTextContent(
            'Flexible rentals',
        );
    });

    test('Offers Displayed', () => {
        const { getByTestId } = render(<PromoSection />);
        const offers = getByTestId('offers-container');

        expect(offers).toBeInTheDocument();
        expect(offers.querySelector('h3')).toHaveTextContent(
            'Clean cars. Flexible bookings. Socially distant rental counters',
        );
    });
});
