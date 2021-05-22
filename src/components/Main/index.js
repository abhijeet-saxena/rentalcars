import React from 'react';
import { MainContainer } from './styles';
import PromoSection from './sections/promo-section';
import TopSection from './sections/top-section';
import FAQ from './sections/faq';
import AdditionalInfo from './sections/additional-info';

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
