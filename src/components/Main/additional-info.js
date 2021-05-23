/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Panel, AccordionContainer } from './styles';
import { Link } from '../../common/components';
import { togglePanel } from '../../common/helper';

const AdditionalInfo = () => {
    return (
        <AccordionContainer>
            <h3>Additional Information</h3>
            <Panel>
                <p onClick={togglePanel}>Related Searches</p>
                <ul>
                    <li>
                        <Link href="#">Luxury Car Hire</Link>
                    </li>
                    <li>
                        <Link href="#">Convertible Car Hire</Link>
                    </li>
                    <li>
                        <Link href="#">7 &amp; 9 Seater Car Hire</Link>
                    </li>
                    <li>
                        <Link href="#">One-Way Car Hire</Link>
                    </li>
                    <li>
                        <Link href="#">Car Hire Europe</Link>
                    </li>
                    <li>
                        <Link href="#">Airport Car Hire</Link>
                    </li>
                    <li>
                        <Link href="#">Magazine</Link>
                    </li>
                    <li>
                        <Link href="#">RentalGuides</Link>
                    </li>
                    <li>
                        <Link href="#">Car Hire Companies</Link>
                    </li>
                    <li>
                        <Link href="#">All Countries</Link>
                    </li>
                    <li>
                        <Link href="#">Popular Countries</Link>
                    </li>
                    <li>
                        <Link href="#">Popular Cities</Link>
                    </li>
                    <li>
                        <Link href="#">Popular Airports</Link>
                    </li>
                </ul>
            </Panel>
            <Panel>
                <p onClick={togglePanel}>Popular Destinations</p>
                <ul>
                    <li>
                        <Link href="#">Los Angeles car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Vienna car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Keflavik car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Amsterdam car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Chicago car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Paris car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Zagreb car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Boston car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Dublin car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Seattle car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Madrid car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Rome car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Dubai car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Dubrovnik car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Prague car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Sevilla car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Frankfurt car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Nice car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Auckland car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Manchester car hire</Link>
                    </li>
                </ul>
            </Panel>
            <Panel>
                <p onClick={togglePanel}>Airports</p>
                <ul>
                    <li>
                        <Link href="#">Seattle Airport car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Munich Airport car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Chicago O'Hare Airport car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Barcelona Airport car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Auckland Airport car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Dublin Airport car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Frankfurt Airport car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Nice Airport car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Vienna Airport car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Dubrovnik Airport car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Prague Airport car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Zagreb Airport car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Rome Fiumicino Airport car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Madrid Airport car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Manchester Airport car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Faro Airport car hire</Link>
                    </li>
                    <li>
                        <Link href="#">
                            Florence International Airport car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="#">Orange County Airport car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Anchorage Airport car hire</Link>
                    </li>
                    <li>
                        <Link href="#">
                            Paris Charles De Gaulle Airport car hire
                        </Link>
                    </li>
                </ul>
            </Panel>
            <Panel>
                <p onClick={togglePanel}>Car Hire Companies</p>
                <ul>
                    <li>
                        <Link href="#">Budget car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Avis car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Dollar car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Hertz car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Sixt car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Europcar car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Thrifty car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Alamo car hire</Link>
                    </li>
                    <li>
                        <Link href="#">tr.brands.driveOnHolidays car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Avec Car Rentals car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Car Net car hire</Link>
                    </li>
                    <li>
                        <Link href="#">
                            tr.brands.europcarLocanord car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="#">First Car Rental car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Global Rent A Car car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Goldcar car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Greenmotion car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Keddy By Europcar car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Locauto car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Mega Rent car hire</Link>
                    </li>
                    <li>
                        <Link href="#">Megadrive car hire</Link>
                    </li>
                </ul>
            </Panel>
        </AccordionContainer>
    );
};

export default AdditionalInfo;
