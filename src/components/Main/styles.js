import { Flex, colors } from '../../common/components';
import styled from 'styled-components';

export const MainContainer = styled(Flex)`
    flex-direction: column;
    margin: 0 auto;
    height: 1200px;
    border: solid 1px red;
    @media (min-width: 768px) {
        width: 75vw;
    }
`;
