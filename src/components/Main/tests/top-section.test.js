import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TopSection from '../index';

describe('<TopSection />', () => {
    afterAll(cleanup);

    test('Destinations are visible', () => {
        const { getByTestId } = render(<TopSection />);
        const topdestination = getByTestId('top-destinations');

        expect(topdestination).toBeInTheDocument();
        expect(topdestination.querySelector('h3')).toHaveTextContent(
            'Top Worldwide Destinations',
        );
        expect(topdestination.querySelector('a')).toHaveAttribute(
            'href',
            'https://www.rentalcars.com/en/city/gb/london/',
        );
    });

    test('Airports are visible', () => {
        const { getByTestId } = render(<TopSection />);
        const topairports = getByTestId('top-airports');

        expect(topairports).toBeInTheDocument();
        expect(topairports.querySelector('h3')).toHaveTextContent(
            'Top Worldwide Airports',
        );
        expect(topairports.querySelector('a')).toHaveAttribute(
            'href',
            'https://www.rentalcars.com/en/airport/gb/lhr/',
        );
    });
});
