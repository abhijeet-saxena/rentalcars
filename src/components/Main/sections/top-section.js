/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { TopSectionContainer } from '../styles';

const TopSection = () => {
    return (
        <TopSectionContainer>
            <div>
                <h2>Top Worldwide Destinations</h2>
                <a href="#">London</a>
                <a href="#">Edinburgh</a>
                <a href="#">San Francisco</a>
                <a href="#">Zurich</a>
                <a href="#">Milan</a>
                <a href="#">Munich</a>
                <a href="#">Split</a>
                <a href="#">Bangkok</a>
                <a href="#">Barcelona</a>
                <a href="#">Florence</a>
            </div>
            <div>
                <h2>Top Worldwide Airports</h2>
                <a href="#">Heathrow Airport</a>
                <a href="#">San Francisco Airport</a>
                <a href="#">Zurich Airport</a>
                <a href="#">Edinburgh Airport</a>
                <a href="#">Keflavik Airport</a>
                <a href="#">Los Angeles Airport</a>
                <a href="#">Milan Malpensa Airport</a>
                <a href="#">Boston Airport</a>
                <a href="#">Amsterdam Schiphol Airport</a>
                <a href="#">Bangkok Suvarnabhumi Airport</a>
            </div>
        </TopSectionContainer>
    );
};

export default TopSection;
