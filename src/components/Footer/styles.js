import { Flex, colors } from '../../common/components';
import styled from 'styled-components';

export const FooterContainer = styled(Flex)`
    flex-direction: column;
    background: ${colors.backgroundGray};
    text-align: center;
    align-items: center;
    font-size: 14px;
    padding-bottom: 2rem;
`;

export const LinksContainer = styled(Flex)`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${colors.primaryBlue};
    padding: 1rem;
    > a {
        margin: 0.5rem;
    }
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const ImagesContainer = styled(Flex)`
    justify-content: space-between;
    width: 70vw;
    margin: 0 auto;
    @media (max-width: 768px) {
        display: none;
    }
`;
