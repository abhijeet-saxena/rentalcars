import React from 'react';
import { TopSectionContainer } from './styles';
import { Flex, Link } from '../../common/components';

const TopSection = () => {
    return (
        <TopSectionContainer>
            <Flex data-testid="top-destinations">
                <h3>Top Worldwide Destinations</h3>
                <Link href="https://www.rentalcars.com/en/city/gb/london/">
                    London
                </Link>
                <Link href="https://www.rentalcars.com/en/city/gb/edinburgh/">
                    Edinburgh
                </Link>
                <Link href="https://www.rentalcars.com/en/city/us/san-francisco/">
                    San Francisco
                </Link>
                <Link href="https://www.rentalcars.com/en/city/ch/zurich/">
                    Zurich
                </Link>
                <Link href="https://www.rentalcars.com/en/city/it/milan/">
                    Milan
                </Link>
                <Link href="https://www.rentalcars.com/en/city/de/munich/">
                    Munich
                </Link>
                <Link href="https://www.rentalcars.com/en/city/hr/split/">
                    Split
                </Link>
                <Link href="https://www.rentalcars.com/en/city/th/bangkok/">
                    Bangkok
                </Link>
                <Link href="https://www.rentalcars.com/en/city/es/barcelona/">
                    Barcelona
                </Link>
                <Link href="https://www.rentalcars.com/en/city/it/florence/">
                    Florence
                </Link>
            </Flex>
            <Flex data-testid="top-airports">
                <h3>Top Worldwide Airports</h3>
                <Link href="https://www.rentalcars.com/en/airport/gb/lhr/">
                    Heathrow Airport
                </Link>
                <Link href="https://www.rentalcars.com/en/airport/us/sfo/">
                    San Francisco Airport
                </Link>
                <Link href="https://www.rentalcars.com/en/airport/ch/zrh/">
                    Zurich Airport
                </Link>
                <Link href="https://www.rentalcars.com/en/airport/gb/edi/">
                    Edinburgh Airport
                </Link>
                <Link href="https://www.rentalcars.com/en/airport/is/kef/">
                    Keflavik Airport
                </Link>
                <Link href="https://www.rentalcars.com/en/airport/us/lax/">
                    Los Angeles Airport
                </Link>
                <Link href="https://www.rentalcars.com/en/airport/it/mxp/">
                    Milan Malpensa Airport
                </Link>
                <Link href="https://www.rentalcars.com/en/airport/us/bos/">
                    Boston Airport
                </Link>
                <Link href="https://www.rentalcars.com/en/airport/nl/ams/">
                    Amsterdam Schiphol Airport
                </Link>
                <Link href="https://www.rentalcars.com/en/airport/th/bkk/">
                    Bangkok Suvarnabhumi Airport
                </Link>
            </Flex>
        </TopSectionContainer>
    );
};

export default TopSection;
