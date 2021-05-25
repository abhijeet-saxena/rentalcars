import styled from 'styled-components';
import { Flex } from '../../common/components';
import { colors } from '../../common/helper';

export const MainContainer = styled.main`
    width: 100vw;
    padding: 1rem;
    max-width: 1142px;
`;

export const ShowcaseContainer = styled(Flex)`
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
    > h3 {
        flex: 0 0 100%;
    }
    > img {
        box-shadow: 0 2px 8px rgb(0 0 0 / 16%);
    }
`;

export const FeaturesContainer = styled(Flex)`
    margin: 4rem 0;
    flex-direction: column;
    gap: 2rem;
    & img {
        width: 48px;
        height: 48px;
        margin-right: 1rem;
    }

    @media (min-width: 1000px) {
        flex-direction: row;
        gap: 1rem;
        & h3 {
            margin-bottom: 0.5rem;
        }
        & img {
            width: 64px;
            height: 64px;
        }
    }
`;

export const OffersContainer = styled(Flex)`
    flex-direction: column;
    gap: 1rem;
    > div {
        flex-direction: column;
        border-radius: 8px;
        border: solid 1px ${colors.border};
        padding: 1rem;
    }
    & img {
        width: 125px;
        height: 112px;
        margin-right: 1rem;
    }
    & h3 {
        line-height: 28px;
    }
    & input {
        flex: 1 1 auto;
        padding-left: 1rem;
        border: solid 1px ${colors.border};
    }
    & button {
        width: 100%;
        background: ${colors.secondaryGreen};
        color: ${colors.textLight};
        padding: 0.75rem;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        > div {
            flex-direction: row;
        }
        & button {
            width: fit-content;
        }
    }
`;

export const TopSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    > div {
        flex: 0 0 50%;
        padding: 1rem;
        flex-wrap: wrap;
        > h3 {
            flex: 0 0 100%;
            margin-bottom: 0.5rem;
        }
        > a {
            min-width: 50%;
            margin: 0.5rem 0;
        }
    }

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const AccordionContainer = styled.section`
    display: flex;
    flex-direction: column;
    background: ${colors.textLight};
    border-radius: 8px;
    border: solid 1px ${colors.border};
    > h3 {
        padding: 1rem;
        border-bottom: solid 1px ${colors.border};
    }
    margin: 2rem 0;
    overflow: hidden;
`;

export const Panel = styled(Flex)`
    flex-direction: column;
    background: ${colors.textLight};
    border-bottom: solid 1px ${colors.border};
    > p {
        cursor: pointer;
        padding: 1rem;
        position: relative;
        &:after {
            content: url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/> </svg>');
            position: absolute;
            right: 1rem;
            transform: rotate(180deg);
            transition: transform 100ms ease-in-out;
        }
        &.expanded:after {
            transform: rotate(0deg);
        }
    }
    > ul,
    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        font-size: 14px;
        height: 0;
        list-style-type: none;
        > li {
            margin: 8px 0;
            min-width: 50%;
        }
    }
    > div ul {
        padding: 0 1rem;
        > li {
            margin: 8px 0;
        }
    }

    @media (min-width: 768px) {
        > ul li {
            min-width: 25%;
        }
    }
`;
