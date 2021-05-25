/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Panel, AccordionContainer } from './styles';
import { Link } from '../../common/components';
import { togglePanel } from '../../common/helper';

const AdditionalInfo = () => {
    return (
        <AccordionContainer data-testid="additional-info">
            <h3>Additional Information</h3>
            <Panel data-testid="related-searches">
                <p onClick={togglePanel}>Related Searches</p>
                <ul>
                    <li>
                        <Link href="https://www.rentalcars.com/en/type/luxury/">
                            Luxury Car Hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/type/convertible/">
                            Convertible Car Hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/type/people-carrier/">
                            7 & 9 Seater Car Hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/one-way/">
                            One-Way Car Hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/continent/europe/">
                            Car Hire Europe
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/airport-rentals/">
                            Airport Car Hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/magazine/">
                            Magazine
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/guides/">
                            RentalGuides
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/companies/">
                            Car Hire Companies
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/locations/">
                            All Countries
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/locations/countries/">
                            Popular Countries
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/locations/cities/">
                            Popular Cities
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/locations/airports/">
                            Popular Airports
                        </Link>
                    </li>
                </ul>
            </Panel>
            <Panel data-testid="popular-destinations">
                <p onClick={togglePanel}>Popular Destinations</p>
                <ul>
                    <li>
                        <Link href="https://www.rentalcars.com/en/city/us/los-angeles/">
                            Los Angeles car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/city/at/vienna/">
                            Vienna car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/city/is/keflavik/">
                            Keflavik car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/city/nl/amsterdam/">
                            Amsterdam car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/city/us/chicago/">
                            Chicago car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/city/fr/paris/">
                            Paris car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/city/hr/zagreb/">
                            Zagreb car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/city/us/boston/">
                            Boston car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/city/ie/dublin/">
                            Dublin car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/city/us/seattle/">
                            Seattle car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/city/es/madrid/">
                            Madrid car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/city/it/rome/">
                            Rome car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/city/ae/dubai/">
                            Dubai car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/city/hr/dubrovnik/">
                            Dubrovnik car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/city/cz/prague/">
                            Prague car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/city/es/sevilla/">
                            Sevilla car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/city/de/frankfurt/">
                            Frankfurt car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/city/fr/nice/">
                            Nice car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/city/nz/auckland/">
                            Auckland car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/city/gb/manchester/">
                            Manchester car hire
                        </Link>
                    </li>
                </ul>
            </Panel>
            <Panel data-testid="airports">
                <p onClick={togglePanel}>Airports</p>
                <ul>
                    <li>
                        <Link href="https://www.rentalcars.com/en/airport/us/sea/">
                            Seattle Airport car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/airport/de/muc/">
                            Munich Airport car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/airport/us/ord/">
                            Chicago O'Hare Airport car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/airport/es/bcn/">
                            Barcelona Airport car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/airport/nz/akl/">
                            Auckland Airport car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/airport/ie/dub/">
                            Dublin Airport car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/airport/de/fra/">
                            Frankfurt Airport car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/airport/fr/nce/">
                            Nice Airport car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/airport/at/vie/">
                            Vienna Airport car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/airport/hr/dbv/">
                            Dubrovnik Airport car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/airport/cz/prg/">
                            Prague Airport car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/airport/hr/zag/">
                            Zagreb Airport car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/airport/it/fco/">
                            Rome Fiumicino Airport car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/airport/es/mad/">
                            Madrid Airport car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/airport/gb/man/">
                            Manchester Airport car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/airport/pt/fao/">
                            Faro Airport car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/airport/it/flr/">
                            Florence International Airport car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/airport/us/sna/">
                            Orange County Airport car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/airport/us/anc/">
                            Anchorage Airport car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/airport/fr/cdg/">
                            Paris Charles De Gaulle Airport car hire
                        </Link>
                    </li>
                </ul>{' '}
            </Panel>
            <Panel data-testid="car-hire-companies">
                <p onClick={togglePanel}>Car Hire Companies</p>
                <ul>
                    <li>
                        <Link href="https://www.rentalcars.com/en/brand/budget/">
                            Budget car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/brand/avis/">
                            Avis car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/brand/dollar/">
                            Dollar car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/brand/hertz/">
                            Hertz car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/brand/sixt/">
                            Sixt car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/brand/thrifty/">
                            Thrifty car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/brand/europcar/">
                            Europcar car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/brand/alamo/">
                            Alamo car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/brand/drive-on-holidays/">
                            tr.brands.driveOnHolidays car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/brand/car-net/">
                            Car Net car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/brand/europcar-locanord/">
                            tr.brands.europcarLocanord car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/brand/goldcar/">
                            Goldcar car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/brand/keddy-by-europcar/">
                            Keddy By Europcar car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/brand/locauto/">
                            Locauto car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/brand/mega-rent/">
                            Mega Rent car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/brand/megadrive/">
                            Megadrive car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/brand/noleggiare/">
                            Noleggiare car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/brand/record-go/">
                            tr.brands.recordGo car hire
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.rentalcars.com/en/brand/thrifty-dubai/">
                            tr.brands.thriftyDubai car hire
                        </Link>
                    </li>
                </ul>{' '}
            </Panel>
        </AccordionContainer>
    );
};

export default AdditionalInfo;
