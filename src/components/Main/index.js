import React from 'react';
// import { Flex, Box, Link } from '../../common/components';
import { MainContainer } from './styles';
import AdditionalInfo from './sections/additional-info';
import FAQ from './sections/faq';
import TopSection from './sections/top-section';

const Main = () => {
    return (
        <MainContainer>
            <TopSection />
            <FAQ></FAQ>
            <AdditionalInfo></AdditionalInfo>
        </MainContainer>
    );
};

export default Main;
