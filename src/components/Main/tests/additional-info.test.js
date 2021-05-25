import React from 'react';
import { render, cleanup } from '@testing-library/react';
import AdditionalInfo from '../index';

describe('<AdditionalInfo />', () => {
    afterAll(cleanup);

    test('Additional Info Heading', () => {
        const { getByTestId } = render(<AdditionalInfo />);

        expect(
            getByTestId('additional-info').querySelector('h3'),
        ).toHaveTextContent('Additional Information');
    });

    test('Related Searches Displayed', () => {
        const { getByTestId } = render(<AdditionalInfo />);
        const related = getByTestId('related-searches');

        expect(related).toBeInTheDocument();
        expect(related.querySelector('p')).toHaveTextContent(
            'Related Searches',
        );
        expect(related.querySelector('a')).toHaveAttribute(
            'href',
            'https://www.rentalcars.com/en/type/luxury/',
        );
    });

    test('Popular Destinations Displayed', () => {
        const { getByTestId } = render(<AdditionalInfo />);
        const popular = getByTestId('popular-destinations');

        expect(popular).toBeInTheDocument();
        expect(popular.querySelector('p')).toHaveTextContent(
            'Popular Destinations',
        );
        expect(popular.querySelector('a')).toHaveAttribute(
            'href',
            'https://www.rentalcars.com/en/city/us/los-angeles/',
        );
    });

    test('Airports Displayed', () => {
        const { getByTestId } = render(<AdditionalInfo />);
        const airports = getByTestId('airports');

        expect(airports).toBeInTheDocument();
        expect(airports.querySelector('p')).toHaveTextContent('Airports');
        expect(airports.querySelector('a')).toHaveAttribute(
            'href',
            'https://www.rentalcars.com/en/airport/us/sea/',
        );
    });

    test('Car Hire Companies', () => {
        const { getByTestId } = render(<AdditionalInfo />);
        const carhirecompanies = getByTestId('car-hire-companies');

        expect(carhirecompanies).toBeInTheDocument();
        expect(carhirecompanies.querySelector('p')).toHaveTextContent(
            'Car Hire Companies',
        );
        expect(carhirecompanies.querySelector('a')).toHaveAttribute(
            'href',
            'https://www.rentalcars.com/en/brand/budget/',
        );
    });
});
