import styled from 'styled-components';

export const colors = {
    primaryBlue: '#1E79CA',
    secondaryGreen: '#3D8425',
    secondaryYellow: '#F7B732',
    textDark: '#333',
    textLight: '#FFF',
    textBlue: '#1273C4',
    backgroundGray: '#f5f5f5',
};

export const Flex = styled.div`
    display: flex;
    flex-direction: ${(props) => props.flexDirection || 'row'};
    padding: ${(props) => props.padding || '0'};
    margin: ${(props) => props.margin || '0'};
    width: ${(props) => props.width || '100%'};
    justify-content: ${(props) => props.justifyContent || 'normal'};
    align-items: ${(props) => props.alignItems || 'normal'};
    background: ${(props) => props.background || colors.textLight};
    text-align: ${(props) => props.textAlign || 'left'};
    font-size: ${(props) => props.fontSize || '1rem'};
    color: ${(props) => props.color || colors.textDark};
`;

export const Box = styled.div`
    padding: ${(props) => props.padding || '0'};
    margin: ${(props) => props.margin || '0'};
    width: ${(props) => props.width || '100%'};
    font-size: inherit;
`;

export const Link = styled.a`
    text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
    color: ${(props) => props.color || colors.textLight};
    padding: ${(props) => props.padding || '0'};
    font-size: inherit;
    &:hover {
        text-decoration: underline;
    }
`;
