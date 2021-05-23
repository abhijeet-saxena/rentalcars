/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Flex, Box, Link } from '../../../common/styles';
import {
    ShowcaseContainer,
    FeaturesContainer,
    PromoSectionContainer,
} from '../styles';
import calendar from '../../../assets/images/promo/calendar.png';
import magnifier from '../../../assets/images/promo/magnifier.png';
import wallet from '../../../assets/images/promo/wallet.png';
import covid from '../../../assets/images/promo/covid.png';
import email from '../../../assets/images/promo/email.png';

import greenmotion from '../../../assets/images/showcase/greenmotion.gif';
import avis from '../../../assets/images/showcase/avis.gif';
import easirent from '../../../assets/images/showcase/easirent.gif';
import europcar from '../../../assets/images/showcase/europcar.gif';
import sixt from '../../../assets/images/showcase/sixt.gif';
import alamo from '../../../assets/images/showcase/alamo.gif';
import budget from '../../../assets/images/showcase/budget.gif';
import dollar from '../../../assets/images/showcase/dollar.gif';

const PromoSection = () => {
    return (
        <>
            <ShowcaseContainer>
                <h2>
                    Rentalcars.com connects you to the biggest brands in car
                    hire.
                </h2>
                <img src={greenmotion} alt="greenmotion"></img>
                <img src={avis} alt="avis"></img>
                <img src={easirent} alt="easirent"></img>
                <img src={europcar} alt="europcar"></img>
                <img src={sixt} alt="sixt"></img>
                <img src={alamo} alt="alamo"></img>
                <img src={budget} alt="budget"></img>
                <img src={dollar} alt="dollar"></img>
            </ShowcaseContainer>
            <FeaturesContainer>
                <Flex padding="1rem 0">
                    <img src={calendar} alt="calendar"></img>
                    <Box>
                        <h3>Flexible rentals</h3>
                        <p>
                            Cancel or change most bookings for free up to 48
                            hours before pick-up
                        </p>
                    </Box>
                </Flex>
                <Flex padding="1rem 0">
                    <img src={magnifier} alt="magnifier"></img>
                    <Box>
                        <h3>No hidden fees</h3>
                        <p>Know exactly what you’re paying</p>
                    </Box>
                </Flex>
                <Flex padding="1rem 0">
                    <img src={wallet} alt="wallet"></img>
                    <Box>
                        <h3>Price Match Guarantee</h3>
                        <p>
                            Found the same deal for less? We’ll match the price.
                        </p>
                    </Box>
                </Flex>
            </FeaturesContainer>
            <PromoSectionContainer>
                <Flex padding="2rem 1rem">
                    <img src={covid} alt="covid"></img>
                    <Flex flexDirection="column">
                        <h3>
                            Clean cars. Flexible bookings. Socially distant
                            rental counters.
                        </h3>
                        <Box margin="0.5rem 0">
                            We’re working with our partners to keep you safe and
                            in the driving seat.
                        </Box>
                        <Link href="#">Find out more</Link>
                    </Flex>
                </Flex>
                <Flex padding="2rem 1rem">
                    <img src={email} alt="email"></img>
                    <Flex flexDirection="column" justifyContent="space-between">
                        <h3>Subscribe for exclusive offers and deals!</h3>
                        <Flex justifyContent="space-between" gap="1rem">
                            <input type="email" placeholder="Email Address" />
                            <button>Sign Me Up !</button>
                        </Flex>
                    </Flex>
                </Flex>
            </PromoSectionContainer>
        </>
    );
};

export default PromoSection;
