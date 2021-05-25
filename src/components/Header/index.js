import React from 'react';
import { Flex } from '../../common/components';
import { colors } from '../../common/helper';
import { HeaderContainer } from './styles';
import Navigation from './navigation';
import Search from './search';

const Header = () => {
    return (
        <Flex background={colors.primaryBlue} justifyContent="center">
            <HeaderContainer data-testid="heading">
                <Navigation></Navigation>
                <h1>Car Hire – Search, Compare &amp; Save</h1>
                <Search></Search>
            </HeaderContainer>
        </Flex>
    );
};

export default Header;
