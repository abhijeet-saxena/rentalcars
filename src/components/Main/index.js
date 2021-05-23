import React from 'react';
import { MainContainer } from './styles';
import PromoSection from './promo-section';
import TopSection from './top-section';
import FAQ from './faq';
import AdditionalInfo from './additional-info';

const Main = () => {
    return (
        <MainContainer>
            <PromoSection />
            <TopSection />
            <FAQ></FAQ>
            <AdditionalInfo></AdditionalInfo>
        </MainContainer>
    );
};

export default Main;
