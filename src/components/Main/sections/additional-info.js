/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Panel, AccordionContainer, Link } from '../../../common/components';
import { togglePanel } from '../../../common/helper';

const AdditionalInfo = () => {
    return (
        <AccordionContainer>
            <h3>Additional Information</h3>
            <Panel>
                <p onClick={togglePanel}>Related Searches</p>
                <div>
                    <Link href="#">Luxury Car Hire</Link>
                    <Link href="#">Convertible Car Hire</Link>
                    <Link href="#">7 & 9 Seater Car Hire</Link>
                    <Link href="#">One-Way Car Hire</Link>
                    <Link href="#">Car Hire Europe</Link>
                    <Link href="#">Airport Car Hire</Link>
                    <Link href="#">Magazine</Link>
                    <Link href="#">RentalGuides</Link>
                    <Link href="#">Car Hire Companies</Link>
                    <Link href="#">All Countries</Link>
                    <Link href="#">Popular Countries</Link>
                    <Link href="#">Popular Cities</Link>
                    <Link href="#">Popular Airports</Link>
                </div>
            </Panel>
            <Panel>
                <p onClick={togglePanel}>Popular Destinations</p>
                <div>
                    <Link href="#">Los Angeles car hire</Link>
                    <Link href="#">Vienna car hire</Link>
                    <Link href="#">Keflavik car hire</Link>
                    <Link href="#">Amsterdam car hire</Link>
                    <Link href="#">Chicago car hire</Link>
                    <Link href="#">Paris car hire</Link>
                    <Link href="#">Zagreb car hire</Link>
                    <Link href="#">Boston car hire</Link>
                    <Link href="#">Dublin car hire</Link>
                    <Link href="#">Seattle car hire</Link>
                    <Link href="#">Madrid car hire</Link>
                    <Link href="#">Rome car hire</Link>
                    <Link href="#">Dubai car hire</Link>
                    <Link href="#">Dubrovnik car hire</Link>
                    <Link href="#">Prague car hire</Link>
                    <Link href="#">Sevilla car hire</Link>
                    <Link href="#">Frankfurt car hire</Link>
                    <Link href="#">Nice car hire</Link>
                    <Link href="#">Auckland car hire</Link>
                    <Link href="#">Manchester car hire</Link>
                </div>
            </Panel>
            <Panel>
                <p onClick={togglePanel}>Airports</p>
                <div>
                    <Link href="#">Seattle Airport car hire</Link>
                    <Link href="#">Munich Airport car hire</Link>
                    <Link href="#">Chicago O'Hare Airport car hire</Link>
                    <Link href="#">Barcelona Airport car hire</Link>
                    <Link href="#">Auckland Airport car hire</Link>
                    <Link href="#">Dublin Airport car hire</Link>
                    <Link href="#">Frankfurt Airport car hire</Link>
                    <Link href="#">Nice Airport car hire</Link>
                    <Link href="#">Vienna Airport car hire</Link>
                    <Link href="#">Dubrovnik Airport car hire</Link>
                    <Link href="#">Prague Airport car hire</Link>
                    <Link href="#">Zagreb Airport car hire</Link>
                    <Link href="#">Rome Fiumicino Airport car hire</Link>
                    <Link href="#">Madrid Airport car hire</Link>
                    <Link href="#">Manchester Airport car hire</Link>
                    <Link href="#">Faro Airport car hire</Link>
                    <Link href="#">
                        Florence International Airport car hire
                    </Link>
                    <Link href="#">Orange County Airport car hire</Link>
                    <Link href="#">Anchorage Airport car hire</Link>
                    <Link href="#">
                        Paris Charles De Gaulle Airport car hire
                    </Link>
                </div>
            </Panel>
            <Panel>
                <p onClick={togglePanel}>Car Hire Companies</p>
                <div>
                    <Link href="#">Budget car hire</Link>
                    <Link href="#">Avis car hire</Link>
                    <Link href="#">Dollar car hire</Link>
                    <Link href="#">Hertz car hire</Link>
                    <Link href="#">Sixt car hire</Link>
                    <Link href="#">Europcar car hire</Link>
                    <Link href="#">Thrifty car hire</Link>
                    <Link href="#">Alamo car hire</Link>
                    <Link href="#">tr.brands.driveOnHolidays car hire</Link>
                    <Link href="#">Avec Car Rentals car hire</Link>
                    <Link href="#">Car Net car hire</Link>
                    <Link href="#">tr.brands.europcarLocanord car hire</Link>
                    <Link href="#">First Car Rental car hire</Link>
                    <Link href="#">Global Rent A Car car hire</Link>
                    <Link href="#">Goldcar car hire</Link>
                    <Link href="#">Greenmotion car hire</Link>
                    <Link href="#">Keddy By Europcar car hire</Link>
                    <Link href="#">Locauto car hire</Link>
                    <Link href="#">Mega Rent car hire</Link>
                    <Link href="#">Megadrive car hire</Link>
                </div>
            </Panel>
        </AccordionContainer>
    );
};

export default AdditionalInfo;
