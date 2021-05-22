/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Panel } from '../../../common/components';
import { AccordionContainer } from '../styles';
import { togglePanel } from '../../../common/helper';

const AdditionalInfo = () => {
    return (
        <AccordionContainer>
            <h2>Additional Information</h2>
            <Panel>
                <p onClick={togglePanel}>Related Searches</p>
                <div>
                    <a href="#">Luxury Car Hire</a>
                    <a href="#">Convertible Car Hire</a>
                    <a href="#">7 & 9 Seater Car Hire</a>
                    <a href="#">One-Way Car Hire</a>
                    <a href="#">Car Hire Europe</a>
                    <a href="#">Airport Car Hire</a>
                    <a href="#">Magazine</a>
                    <a href="#">RentalGuides</a>
                    <a href="#">Car Hire Companies</a>
                    <a href="#">All Countries</a>
                    <a href="#">Popular Countries</a>
                    <a href="#">Popular Cities</a>
                    <a href="#">Popular Airports</a>
                </div>
            </Panel>
            <Panel>
                <p onClick={togglePanel}>Popular Destinations</p>
                <div>
                    <a href="#">Los Angeles car hire</a>
                    <a href="#">Vienna car hire</a>
                    <a href="#">Keflavik car hire</a>
                    <a href="#">Amsterdam car hire</a>
                    <a href="#">Chicago car hire</a>
                    <a href="#">Paris car hire</a>
                    <a href="#">Zagreb car hire</a>
                    <a href="#">Boston car hire</a>
                    <a href="#">Dublin car hire</a>
                    <a href="#">Seattle car hire</a>
                    <a href="#">Madrid car hire</a>
                    <a href="#">Rome car hire</a>
                    <a href="#">Dubai car hire</a>
                    <a href="#">Dubrovnik car hire</a>
                    <a href="#">Prague car hire</a>
                    <a href="#">Sevilla car hire</a>
                    <a href="#">Frankfurt car hire</a>
                    <a href="#">Nice car hire</a>
                    <a href="#">Auckland car hire</a>
                    <a href="#">Manchester car hire</a>
                </div>
            </Panel>
            <Panel>
                <p onClick={togglePanel}>Airports</p>
                <div>
                    <a href="#">Seattle Airport car hire</a>
                    <a href="#">Munich Airport car hire</a>
                    <a href="#">Chicago O'Hare Airport car hire</a>
                    <a href="#">Barcelona Airport car hire</a>
                    <a href="#">Auckland Airport car hire</a>
                    <a href="#">Dublin Airport car hire</a>
                    <a href="#">Frankfurt Airport car hire</a>
                    <a href="#">Nice Airport car hire</a>
                    <a href="#">Vienna Airport car hire</a>
                    <a href="#">Dubrovnik Airport car hire</a>
                    <a href="#">Prague Airport car hire</a>
                    <a href="#">Zagreb Airport car hire</a>
                    <a href="#">Rome Fiumicino Airport car hire</a>
                    <a href="#">Madrid Airport car hire</a>
                    <a href="#">Manchester Airport car hire</a>
                    <a href="#">Faro Airport car hire</a>
                    <a href="#">Florence International Airport car hire</a>
                    <a href="#">Orange County Airport car hire</a>
                    <a href="#">Anchorage Airport car hire</a>
                    <a href="#">Paris Charles De Gaulle Airport car hire</a>
                </div>
            </Panel>
            <Panel>
                <p onClick={togglePanel}>Car Hire Companies</p>
                <div>
                    <a href="#">Budget car hire</a>
                    <a href="#">Avis car hire</a>
                    <a href="#">Dollar car hire</a>
                    <a href="#">Hertz car hire</a>
                    <a href="#">Sixt car hire</a>
                    <a href="#">Europcar car hire</a>
                    <a href="#">Thrifty car hire</a>
                    <a href="#">Alamo car hire</a>
                    <a href="#">tr.brands.driveOnHolidays car hire</a>
                    <a href="#">Avec Car Rentals car hire</a>
                    <a href="#">Car Net car hire</a>
                    <a href="#">tr.brands.europcarLocanord car hire</a>
                    <a href="#">First Car Rental car hire</a>
                    <a href="#">Global Rent A Car car hire</a>
                    <a href="#">Goldcar car hire</a>
                    <a href="#">Greenmotion car hire</a>
                    <a href="#">Keddy By Europcar car hire</a>
                    <a href="#">Locauto car hire</a>
                    <a href="#">Mega Rent car hire</a>
                    <a href="#">Megadrive car hire</a>
                </div>
            </Panel>
        </AccordionContainer>
    );
};

export default AdditionalInfo;
