import React from 'react';
import { Flex, Link, colors } from '../../common/styles';
import {
    FooterContainer,
    LinksContainer,
    CopyrightContainer,
    ImagesContainer,
} from './styles';
import booking from '../../assets/images/footer/booking.png';
import priceline from '../../assets/images/footer/priceline.png';
import kayak from '../../assets/images/footer/kayak.png';
import agoda from '../../assets/images/footer/agoda.png';
import rentalcars from '../../assets/images/footer/rentalcars.png';
import opentable from '../../assets/images/footer/opentable.png';

const Footer = () => {
    return (
        <FooterContainer>
            <LinksContainer>
                <li>
                    <Link href="#" color={colors.textLight}>
                        Privacy Notice
                    </Link>
                </li>
                <li>
                    <Link href="#" color={colors.textLight}>
                        Cookies
                    </Link>
                </li>
                <li>
                    <Link href="#" color={colors.textLight}>
                        Terms & Conditions
                    </Link>
                </li>
                <li>
                    <Link href="#" color={colors.textLight}>
                        Help
                    </Link>
                </li>
                <li>
                    <Link href="#" color={colors.textLight}>
                        Modern Slavery Statement
                    </Link>
                </li>
                <li>
                    <Link href="#" color={colors.textLight}>
                        Supply Partner Enquiry and Marketplace
                    </Link>
                </li>
                <li>
                    <Link href="#" color={colors.textLight}>
                        Affiliate Programme
                    </Link>
                </li>
                <li>
                    <Link href="#" color={colors.textLight}>
                        Careers
                    </Link>
                </li>
            </LinksContainer>
            <CopyrightContainer>
                <section>
                    Rentalcars.com is a trading name of Booking.com Transport
                    Limited which is a limited company registered in England and
                    Wales (Number: 05179829) whose registered address is at 100
                    New Bridge Street, London, EC4V 6JA. VAT number: GB
                    855349007.
                </section>
                <section>
                    Rentalcars.com is part of Booking Holdings Inc., the world
                    leader in online travel &amp; related services.
                </section>
                <section>
                    Booking.com Transport Limited (FCA Firm Reference No 777648)
                    is an Appointed Representative of Cover Genius Limited,
                    which is authorised and registered by the Financial Conduct
                    Authority, Firm Reference No 750711. Traveljigsaw Insurance
                    Limited is incorporated in Malta and is authorised by the
                    Malta Financial Services Authority to carry on the business
                    of insurance in terms of the Insurance Business Act 1998.
                    Company Registration Number: C82173 Registered Office,
                    Development House, St Anne Street, Floriana, FRN 9010,
                    Malta.
                </section>
                <ImagesContainer>
                    <img src={booking} alt="booking-logo" width="91px"></img>
                    <img
                        src={priceline}
                        alt="priceline-logo"
                        width="91px"
                    ></img>
                    <img src={kayak} alt="kayak-logo" width="79px"></img>
                    <img src={agoda} alt="agoda-logo" width="70px"></img>
                    <img
                        src={rentalcars}
                        alt="rentalcars-logo"
                        width="109px"
                    ></img>
                    <img
                        src={opentable}
                        alt="opentable-logo"
                        width="95px"
                    ></img>
                </ImagesContainer>
                <section>
                    Copyright © 2020 Booking.com Transport Limited trading as
                    Rentalcars.com. All rights reserved
                </section>
            </CopyrightContainer>
        </FooterContainer>
    );
};

export default Footer;
