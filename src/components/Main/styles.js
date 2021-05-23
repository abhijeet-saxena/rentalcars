import { Flex, colors } from '../../common/styles';
import styled from 'styled-components';

export const MainContainer = styled(Flex)`
    flex-direction: column;
    padding: 1rem 1rem;
    max-width: 1142px;
`;

export const ShowcaseContainer = styled(Flex)`
    justify-content: space-between;
    flex-wrap: wrap;
    > h2 {
        width: 100%;
    }
    > img {
        box-shadow: 0 2px 8px rgb(0 0 0 / 16%);
        width: 80px;
        margin: 2rem 0 0;
    }
    margin-bottom: 2rem;
`;

export const FeaturesContainer = styled(Flex)`
    gap: 1rem;
    & img {
        width: 64px;
        height: 64px;
        margin-right: 1rem;
        @media (max-width: 1000px) {
            width: 48px;
            height: 48px;
        }
    }
    & h3 {
        margin-bottom: 0.5rem;
    }
    @media (max-width: 1000px) {
        flex-direction: column;
    }
    margin: 2rem 0;
`;

export const PromoSectionContainer = styled(Flex)`
    gap: 1rem;
    & img {
        width: 125px;
        height: 112px;
        margin-right: 1rem;
    }
    & h3 {
        line-height: 28px;
    }
    > div {
        border-radius: 8px;
        border: solid 1px ${colors.border};
        @media (max-width: 1000px) {
            flex-wrap: wrap;
        }
        & input {
            flex: 1 1 auto;
            padding-left: 1rem;
            border: solid 1px ${colors.border};
        }
        & button {
            padding: 0.75rem;
            background: ${colors.secondaryGreen};
            color: ${colors.textLight};
        }
    }
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const TopSectionContainer = styled(Flex)`
    margin: 1.5rem 0;
    > div {
        flex: 0 0 50%;
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        > h3 {
            flex: 0 0 100%;
            margin-bottom: 1rem;
        }
        > a {
            min-width: 50%;
            margin: 8px 0;
        }
    }
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;
