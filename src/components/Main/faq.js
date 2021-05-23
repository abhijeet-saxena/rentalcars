import React from 'react';
import { AccordionContainer, Panel } from './styles';
import { togglePanel } from '../../common/helper';

const FAQ = () => {
    return (
        <AccordionContainer>
            <h3>Frequently Asked Questions</h3>
            <Panel>
                <p onClick={togglePanel}>What do I need to hire a car?</p>
                <div>
                    To book your car, all you need is a credit or debit card.
                    When you pick the car up, you'll need:
                    <ul>
                        <li>
                            Your voucher /eVoucher, to show that you've paid for
                            the car.
                        </li>
                        <li>
                            The main driver's credit / debit card, with enough
                            available funds for the car's deposit.
                        </li>
                        <li>
                            Each driver's full, valid driving licence, which
                            they've held for at least 12 months (often 24).
                        </li>
                        <li>
                            Your passport and any other ID the car hire company
                            needs to see.
                        </li>
                    </ul>
                </div>
            </Panel>
            <Panel>
                <p onClick={togglePanel}>
                    How old do I have to be to rent a car?
                </p>
                <ul>
                    For most car hire companies, the age requirement is between
                    21 and 70 years old. If you're under 25 or over 70, you
                    might have to pay an additional fee.
                </ul>
            </Panel>
            <Panel>
                <p onClick={togglePanel}>
                    Can I book a hire car for someone else?
                </p>
                <ul>
                    Yes, as long as they meet these requirements. Just fill in
                    their details while you're making the reservation.
                </ul>
            </Panel>
            <Panel>
                <p onClick={togglePanel}>
                    How do I find the cheapest car hire deal?
                </p>
                <ul>
                    We work with all the major international car hire brands
                    (and lots of smaller local companies) to bring you a huge
                    choice of cars at the very best prices. That's how we can
                    find you cheap car hire deals at over 60,000 locations
                    worldwide. To compare prices and find your ideal car at an
                    unbeatable price, just use our search form.
                </ul>
            </Panel>
            <Panel>
                <p onClick={togglePanel}>
                    What should I look for when I'm choosing a car?
                </p>
                <div>
                    <ul>
                        <li>
                            Space: You'll enjoy your rental far more if you
                            choose a car with plenty of room for your passengers
                            and luggage. .
                        </li>
                        <li>
                            Fuel policy: Not planning on driving much? A Like
                            for like fuel policy can save you a lot of money.
                        </li>
                        <li>
                            Location: You can't beat an 'on-airport' pick-up for
                            convenience, but an 'off-airport' pick-up with a
                            shuttle bus can be much cheaper.
                        </li>
                    </ul>
                </div>
            </Panel>
            <Panel>
                <p onClick={togglePanel}>
                    Are all fees included in the rental price?
                </p>
                <ul>
                    The vast majority of our rentals include Theft Protection,
                    Collision Damage Waiver (CDW), local taxes, airport
                    surcharges and any road fees. You'll pay for any ‘extras'
                    when you pick your car up, along with any young driver,
                    additional driver or one-way fees – but we'll explain any
                    additional costs before you book your car (and taking your
                    own child seats or GPS can be an easy way to reduce your
                    costs). For more details on what's included, just check the
                    Ts&amp;Cs of any car you're looking at.
                </ul>
            </Panel>
        </AccordionContainer>
    );
};

export default FAQ;
