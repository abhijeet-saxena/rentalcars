import React from 'react';
import { Flex, colors } from '../../common/styles';
import { HeaderContainer } from './styles';
import Navigation from './navigation';
import Search from './search';

const Header = () => {
    return (
        <Flex background={colors.primaryBlue} justifyContent="center">
            <HeaderContainer>
                <Navigation></Navigation>
                <h1>Car Hire – Search, Compare &amp; Save</h1>
                <Search></Search>
            </HeaderContainer>
        </Flex>
    );
};

export default Header;
