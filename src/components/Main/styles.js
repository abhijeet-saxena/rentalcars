import { Flex, colors } from '../../common/components';
import styled from 'styled-components';

export const MainContainer = styled(Flex)`
    flex-direction: column;
    margin: 0 auto;
    @media (min-width: 768px) {
        width: 70vw;
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
            color: ${colors.primaryBlue};
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
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
