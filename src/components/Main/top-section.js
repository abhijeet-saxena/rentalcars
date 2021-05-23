import React from 'react';
import { TopSectionContainer } from './styles';
import { Flex, Link } from '../../common/components';

const TopSection = () => {
    return (
        <TopSectionContainer>
            <Flex>
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
            </Flex>
            <Flex>
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
            </Flex>
        </TopSectionContainer>
    );
};

export default TopSection;
