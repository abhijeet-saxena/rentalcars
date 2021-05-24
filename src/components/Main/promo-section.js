import React from 'react';
import { Flex, Link, Box } from '../../common/components';
import { ShowcaseContainer, FeaturesContainer, PromoContainer } from './styles';

const PromoSection = () => {
    return (
        <>
            <ShowcaseContainer>
                <h3>
                    Rentalcars.com connects you to the biggest brands in car
                    hire.
                </h3>
                <img
                    src="https://cdn2.rcstatic.com/images/supplier_logos/greenmotion_logo_lrg.gif"
                    alt="greenmotion"
                    width="80"
                    height="40"
                ></img>
                <img
                    src="https://cdn2.rcstatic.com/images/supplier_logos/avis_logo_lrg.gif"
                    alt="avis"
                    width="80"
                    height="40"
                ></img>
                <img
                    src="https://cdn2.rcstatic.com/images/supplier_logos/easirent_logo_lrg.gif"
                    alt="easirent"
                    width="80"
                    height="40"
                ></img>
                <img
                    src="https://cdn2.rcstatic.com/images/supplier_logos/europcar_logo_lrg.gif"
                    alt="europcar"
                    width="80"
                    height="40"
                ></img>
                <img
                    src="https://cdn2.rcstatic.com/images/supplier_logos/sixt_logo_lrg.gif"
                    alt="sixt"
                    width="80"
                    height="40"
                ></img>
                <img
                    src="https://cdn2.rcstatic.com/images/supplier_logos/alamo_logo_lrg.gif"
                    alt="alamo"
                    width="80"
                    height="40"
                ></img>
                <img
                    src="https://cdn2.rcstatic.com/images/supplier_logos/budget_logo_lrg.gif"
                    alt="budget"
                    width="80"
                    height="40"
                ></img>
                <img
                    src="https://cdn2.rcstatic.com/images/supplier_logos/dollar_logo_lrg.gif"
                    alt="dollar"
                    width="80"
                    height="40"
                ></img>
            </ShowcaseContainer>
            <FeaturesContainer>
                <Flex>
                    <img
                        src="https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/usps/mobile/usp_calendar@1x.png"
                        alt="Flexible Rentals"
                    ></img>
                    <Box>
                        <h3>Flexible rentals</h3>
                        <p>
                            Cancel or change most bookings for free up to 48
                            hours before pick-up
                        </p>
                    </Box>
                </Flex>
                <Flex>
                    <img
                        src="https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/usps/mobile/usp_magnifier@1x.png"
                        alt="No Hidden Fees"
                    ></img>
                    <Box>
                        <h3>No hidden fees</h3>
                        <p>Know exactly what you’re paying</p>
                    </Box>
                </Flex>
                <Flex>
                    <img
                        src="https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/usps/mobile/usp_wallet@1x.png"
                        alt="Price Match Guarantee"
                    ></img>
                    <Box>
                        <h3>Price Match Guarantee</h3>
                        <p>
                            Found the same deal for less? We’ll match the price.
                        </p>
                    </Box>
                </Flex>
            </FeaturesContainer>
            <PromoContainer>
                <Flex>
                    <img
                        src="https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/covid-banner/mobile/thumbnail_covid@1x.png"
                        alt="covid-message"
                    ></img>
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
                <Flex>
                    <img
                        src="https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/email-subscription/mobile/email_signup@1x.png"
                        alt="email-subscription"
                    ></img>
                    <Flex flexDirection="column" gap="1rem">
                        <h3>Subscribe for exclusive offers and deals!</h3>
                        <Flex gap="1rem" style={{ flexWrap: 'wrap' }}>
                            <input type="email" placeholder="Email Address" />
                            <button type="button">Sign Me Up !</button>
                        </Flex>
                    </Flex>
                </Flex>
            </PromoContainer>
        </>
    );
};

export default PromoSection;
