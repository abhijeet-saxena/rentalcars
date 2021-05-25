import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Footer from '../index';

describe('<Footer />', () => {
    afterAll(cleanup);
    it('Rendered Snapshot Matches', () => {
        const footer = render(<Footer />);
        expect(footer).toMatchSnapshot();
    });

    test('Site Links Are Displayed', () => {
        const { getByTestId } = render(<Footer />);
        expect(getByTestId('site-links')).toBeInTheDocument();

        expect(getByTestId('site-links').querySelector('a')).toHaveAttribute(
            'href',
            'https://www.rentalcars.com/PrivacyPolicy.do',
        );
    });

    test('Copyright text is Displayed', () => {
        const { getByTestId } = render(<Footer />);

        expect(
            getByTestId('copyright').querySelector('section'),
        ).toHaveTextContent('Rentalcars.com is a trading name of Booking.com');
    });

    test('Footer image is Displayed', () => {
        const { getByTestId } = render(<Footer />);

        expect(getByTestId('copyright').querySelector('img')).toHaveAttribute(
            'src',
            'https://r-cf.bstatic.com/static/img/tfl/group_logos/logo_booking/27c8d1832de6a3123b6ee45b59ae2f81b0d9d0d0.png',
        );
    });
});
