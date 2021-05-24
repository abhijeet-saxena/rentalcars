import React from 'react';
import { Link } from '../../common/components';
import { colors } from '../../common/helper';
import {
    FooterContainer,
    LinksContainer,
    CopyrightContainer,
    ImagesContainer,
} from './styles';

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
                        Terms &amp; Conditions
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
                    <img
                        src="https://r-cf.bstatic.com/static/img/tfl/group_logos/logo_booking/27c8d1832de6a3123b6ee45b59ae2f81b0d9d0d0.png"
                        alt="booking"
                        width="91px"
                        height="26px"
                    ></img>
                    <img
                        src="https://q-cf.bstatic.com/static/img/tfl/group_logos/logo_priceline/f80e129541f2a952d470df2447373390f3dd4e44.png"
                        alt="priceline"
                        width="91px"
                        height="26px"
                    ></img>
                    <img
                        src="https://r-cf.bstatic.com/static/img/tfl/group_logos/logo_kayak/83ef7122074473a6566094e957ff834badb58ce6.png"
                        alt="kayak"
                        width="79px"
                        height="26px"
                    ></img>
                    <img
                        src="https://q-cf.bstatic.com/static/img/tfl/group_logos/logo_agoda/1c9191b6a3651bf030e41e99a153b64f449845ed.png"
                        alt="agoda"
                        width="70px"
                        height="26px"
                    ></img>
                    <img
                        src="https://r-cf.bstatic.com/static/img/tfl/group_logos/logo_rentalcars/6bc5ec89d870111592a378bbe7a2086f0b01abc4.png"
                        alt="rentalcars"
                        width="109px"
                        height="26px"
                    ></img>
                    <img
                        src="https://r-cf.bstatic.com/static/img/tfl/group_logos/logo_opentable/a4b50503eda6c15773d6e61c238230eb42fb050d.png"
                        alt="opentable"
                        width="95px"
                        height="26px"
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
