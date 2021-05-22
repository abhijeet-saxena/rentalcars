import React from 'react';
import { Box, Link } from '../../common/components';
import { FooterContainer, LinksContainer, ImagesContainer } from './styles';

import booking from '../../assets/images/booking.png';
import priceline from '../../assets/images/priceline.png';
import kayak from '../../assets/images/kayak.png';
import agoda from '../../assets/images/agoda.png';
import rentalcars from '../../assets/images/rentalcars.png';
import opentable from '../../assets/images/opentable.png';

const Footer = () => {
    return (
        <FooterContainer>
            <LinksContainer>
                <Link href="#" padding="0.5rem 0">
                    Privacy Notice
                </Link>
                <Link href="#" padding="0.5rem 0">
                    Cookies
                </Link>
                <Link href="#" padding="0.5rem 0">
                    Terms & Conditions
                </Link>
                <Link href="#" padding="0.5rem 0">
                    Help
                </Link>
                <Link href="#" padding="0.5rem 0">
                    Modern Slavery Statement
                </Link>
                <Link href="#" padding="0.5rem 0">
                    Supply Partner Enquiry and Marketplace
                </Link>
                <Link href="#" padding="0.5rem 0">
                    Affiliate Programme
                </Link>
                <Link href="#" padding="0.5rem 0">
                    Careers
                </Link>
            </LinksContainer>
            <Box width="80%" margin="1rem 0">
                Rentalcars.com is a trading name of Booking.com Transport
                Limited which is a limited company registered in England and
                Wales (Number: 05179829) whose registered address is at 100 New
                Bridge Street, London, EC4V 6JA. VAT number: GB 855349007.
                <br />
                <br />
                Rentalcars.com is part of Booking Holdings Inc., the world
                leader in online travel &amp; related services.
                <br />
                <br />
                Booking.com Transport Limited (FCA Firm Reference No 777648) is
                an Appointed Representative of Cover Genius Limited, which is
                authorised and registered by the Financial Conduct Authority,
                Firm Reference No 750711. Traveljigsaw Insurance Limited is
                incorporated in Malta and is authorised by the Malta Financial
                Services Authority to carry on the business of insurance in
                terms of the Insurance Business Act 1998. Company Registration
                Number: C82173 Registered Office, Development House, St Anne
                Street, Floriana, FRN 9010, Malta.
                <br />
                <br />
                <ImagesContainer>
                    <img src={booking} alt="booking" width="91px"></img>
                    <img src={priceline} alt="priceline" width="91px"></img>
                    <img src={kayak} alt="kayak" width="79px"></img>
                    <img src={agoda} alt="agoda" width="70px"></img>
                    <img src={rentalcars} alt="rentalcars" width="109px"></img>
                    <img src={opentable} alt="opentable" width="95px"></img>
                </ImagesContainer>
                <br />
                Copyright © 2020 Booking.com Transport Limited trading as
                Rentalcars.com. All rights reserved
            </Box>
        </FooterContainer>
    );
};

export default Footer;
