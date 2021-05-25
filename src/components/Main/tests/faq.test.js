import React from 'react';
import { render, cleanup } from '@testing-library/react';
import FAQ from '../index';

describe('<FAQ />', () => {
    afterAll(cleanup);

    test('FAQ Heading', () => {
        const { getByTestId } = render(<FAQ />);

        expect(getByTestId('faq').querySelector('h3')).toHaveTextContent(
            'Frequently Asked Questions',
        );
    });

    test('Panels are visible', () => {
        const { getByTestId } = render(<FAQ />);

        expect(getByTestId('faq-1')).toBeInTheDocument();
        expect(getByTestId('faq-2')).toBeInTheDocument();
        expect(getByTestId('faq-3')).toBeInTheDocument();
        expect(getByTestId('faq-4')).toBeInTheDocument();
        expect(getByTestId('faq-5')).toBeInTheDocument();
        expect(getByTestId('faq-6')).toBeInTheDocument();
    });
});
