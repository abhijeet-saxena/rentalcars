import React from 'react';
import { NavContainer } from './styles';
import { Flex, Box } from '../../common/components';
import { colors } from '../../common/helper';
import logo from '../../assets/images/rc-logo.svg';
import gb from '../../assets/images/gb.png';

const Navigation = () => {
    return (
        <NavContainer>
            <a href="/rentalcars">
                <img
                    src={logo}
                    alt="Rentalcars.com Logo"
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
                <span style={{ color: colors.textLight }}>INR</span>
                <img src={gb} alt="gb"></img>
                <button>Manage Booking</button>
            </Flex>

            <Box className="hamburger">
                <svg viewBox="0 0 24 24" width="20">
                    <path
                        stroke={colors.textLight}
                        fill={colors.textLight}
                        d="M2.25 18.753h19.5a.75.75 0 0 0 0-1.5H2.25a.75.75 0 0 0 0 1.5zm0-6h19.5a.75.75 0 0 0 0-1.5H2.25a.75.75 0 0 0 0 1.5zm0-6h19.5a.75.75 0 0 0 0-1.5H2.25a.75.75 0 0 0 0 1.5z"
                    />
                </svg>
            </Box>
        </NavContainer>
    );
};

export default Navigation;
