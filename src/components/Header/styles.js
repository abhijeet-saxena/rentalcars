import { Flex, colors } from '../../common/components';
import styled from 'styled-components';

export const HeaderContainer = styled(Flex)`
    flex-direction: column;
    background: ${colors.primaryBlue};
    height: 348px;
    @media (min-width: 768px) {
    }
`;
