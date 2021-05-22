import { Flex, colors } from '../../common/components';
import styled from 'styled-components';

export const MainContainer = styled(Flex)`
    flex-direction: column;
    margin: 0 auto;
    @media (min-width: 768px) {
        width: 70vw;
    }
`;

export const ShowcaseContainer = styled(Flex)`
    margin: 2rem 0;
    justify-content: space-between;
    flex-wrap: wrap;
    > h2 {
        width: 100%;
        margin-bottom: 1rem;
    }
    > img {
        box-shadow: 0 2px 8px rgb(0 0 0 / 16%);
        width: 80px;
    }
    @media (max-width: 1000px) {
        width: 95vw;
        margin: 2rem auto;
    }
`;

export const FeaturesContainer = styled(Flex)`
    margin: 3rem 0rem;
    justify-content: space-between;
    gap: 0rem;
    > div {
        padding: 0.5rem;
        flex: 1 1 100%;
    }
    & img {
        margin-right: 1rem;
        width: 64px;
        height: 64px;
    }
    & h3 {
        margin-bottom: 0.5rem;
    }
    @media (max-width: 1000px) {
        flex-direction: column;
        width: 95vw;
        margin: 2rem auto;
    }
`;

export const PromoSectionContainer = styled(Flex)`
    gap: 1rem;
    margin: 2rem 0.5rem;
    > div {
        padding: 0.5rem;
        flex: 0 0 50%;
        border-radius: 8px;
        border: solid 1px ${colors.border};
        @media (max-width: 1000px) {
            flex-wrap: wrap;
        }
        & input {
            flex: 1 1 auto;
            padding-left: 1rem;
            height: 48px;
        }
        & button {
            padding: 0.75rem;
            background: ${colors.secondaryGreen};
            color: ${colors.textLight};
            border: none;
            outline: none;
            border-radius: 4px;
        }
    }
    @media (max-width: 1000px) {
        flex-direction: column;
        width: 95vw;
        margin: 2rem auto;
    }
`;

export const TopSectionContainer = styled(Flex)`
    > div {
        flex: 0 0 50%;
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        > h2 {
            flex: 0 0 100%;
            margin-bottom: 1rem;
            @media (max-width: 768px) {
                font-size: 20px;
            }
        }
        > a {
            min-width: 50%;
            margin: 8px 0;
            @media (max-width: 768px) {
                min-width: 50%;
            }
        }
    }
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const AccordionContainer = styled(Flex)`
    flex-direction: column;
    border-radius: 8px;
    border: solid 1px ${colors.border};
    > h2 {
        padding: 1rem;
        border-bottom: solid 1px ${colors.border};
    }
    margin: 1rem auto;
    @media (max-width: 768px) {
        width: 95vw;
    }
`;
