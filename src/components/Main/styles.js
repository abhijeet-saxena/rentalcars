import { Flex, colors } from '../../common/components';
import styled from 'styled-components';

export const MainContainer = styled(Flex)`
    flex-direction: column;
    margin: 0 auto;
    @media (min-width: 768px) {
        width: 70vw;
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
