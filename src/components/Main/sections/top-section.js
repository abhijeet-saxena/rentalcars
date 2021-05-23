/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from '../../../common/styles';
import { TopSectionContainer } from '../styles';

const TopSection = () => {
    return (
        <TopSectionContainer>
            <div>
                <h3>Top Worldwide Destinations</h3>
                <Link href="#">London</Link>
                <Link href="#">Edinburgh</Link>
                <Link href="#">San Francisco</Link>
                <Link href="#">Zurich</Link>
                <Link href="#">Milan</Link>
                <Link href="#">Munich</Link>
                <Link href="#">Split</Link>
                <Link href="#">Bangkok</Link>
                <Link href="#">Barcelona</Link>
                <Link href="#">Florence</Link>
            </div>
            <div>
                <h3>Top Worldwide Airports</h3>
                <Link href="#">Heathrow Airport</Link>
                <Link href="#">San Francisco Airport</Link>
                <Link href="#">Zurich Airport</Link>
                <Link href="#">Edinburgh Airport</Link>
                <Link href="#">Keflavik Airport</Link>
                <Link href="#">Los Angeles Airport</Link>
                <Link href="#">Milan Malpensa Airport</Link>
                <Link href="#">Boston Airport</Link>
                <Link href="#">Amsterdam Schiphol Airport</Link>
                <Link href="#">Bangkok Suvarnabhumi Airport</Link>
            </div>
        </TopSectionContainer>
    );
};

export default TopSection;
