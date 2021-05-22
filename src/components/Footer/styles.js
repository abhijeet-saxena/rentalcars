import { Flex, colors } from '../../common/components';
import styled from 'styled-components';

export const FooterContainer = styled(Flex)`
    flex-direction: column;
    background: ${colors.backgroundGray};
    text-align: center;
    align-items: center;
    font-size: 14px;
    @media (min-width: 768px) {
        font-size: 16px;
    }
`;

export const LinksContainer = styled(Flex)`
    flex-direction: column;
    align-items: center;
    background: ${colors.primaryBlue};
    padding: 1rem;
    font-size: 14px;
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        font-size: 16px;
        > a {
            margin: 0 1rem;
        }
    }
`;

export const ImagesContainer = styled(Flex)`
    justify-content: space-between;
    background: transparent;
    width: 75vw;
    margin: 0 auto;
    @media (max-width: 768px) {
        display: none;
    }
`;
