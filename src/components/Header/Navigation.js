import React, { useState } from 'react';
import { NavContainer } from './styles';
import { Flex, Drawer } from '../../common/components';
import { colors } from '../../common/helper';
import logo from '../../assets/images/rc-logo.svg';
import gb from '../../assets/images/gb.png';
import hamburger from '../../assets/images/hamburger.svg';
import inr from '../../assets/images/inr.svg';
import calendar from '../../assets/images/calendar.svg';

const Navigation = () => {
    const [showMenu, toggleMenu] = useState(false);
    const closeMenu = () => toggleMenu((show) => !show);

    return (
        <NavContainer data-testid="navigation">
            {showMenu && (
                <Drawer closeMenu={closeMenu} heading="Menu">
                    <Flex
                        padding="2rem"
                        flexDirection="column"
                        gap="1rem"
                        fontSize="14px"
                    >
                        <Flex alignItems="center" gap="0.5rem">
                            <img src={inr} alt="Prices in Indian Rupees" />
                            Indian Rupee
                        </Flex>
                        <Flex alignItems="center" gap="0.5rem">
                            <img
                                src={gb}
                                alt="Selected Language English"
                                style={{ borderRadius: '50%' }}
                                height="24px"
                            />
                            English
                        </Flex>
                        <Flex alignItems="center" gap="0.5rem">
                            <img src={calendar} alt="Manage Booking" />
                            Manage Booking
                        </Flex>
                    </Flex>
                </Drawer>
            )}
            <a href="/rentalcars">
                <img
                    src={logo}
                    alt="Rentalcars.com"
                    width="156"
                    height="21"
                ></img>
            </a>
            <Flex
                width="auto"
                gap="1.5rem"
                className="menu"
                alignItems="center"
            >
                <span
                    style={{ color: colors.textLight }}
                    aria-label="Prices in Indian Rupees"
                >
                    INR
                </span>
                <img src={gb} alt="Selected Language English"></img>
                <button type="button">Manage Booking</button>
            </Flex>

            <button
                type="button"
                className="hamburger"
                onClick={closeMenu}
                aria-label="Open Menu"
            >
                <img src={hamburger} alt="" />
            </button>
        </NavContainer>
    );
};

export default Navigation;
