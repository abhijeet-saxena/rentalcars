import styled from 'styled-components';

export const colors = {
    primaryBlue: '#1E79CA',
    primaryBlueLight: '#e7f4fe',
    secondaryGreen: '#3D8425',
    secondaryYellow: '#F7B732',
    textDark: '#333',
    textLight: '#FFF',
    textBlue: '#1273C4',
    backgroundGray: '#f5f5f5',
    border: '#e7e7e7',
    badgeRed: '#961412',
    badgeBlue: '#1263b0',
    badgeGray: '#474747',
    badgeYellow: '#f1c74c',
};

export const Flex = styled.div`
    display: flex;
    flex-direction: ${(props) => props.flexDirection || 'row'};
    padding: ${(props) => props.padding || '0'};
    margin: ${(props) => props.margin || '0'};
    width: ${(props) => props.width || '100%'};
    justify-content: ${(props) => props.justifyContent || 'normal'};
    align-items: ${(props) => props.alignItems || 'normal'};
    background: ${(props) => props.background || 'transparent'};
    text-align: ${(props) => props.textAlign || 'left'};
    font-size: ${(props) => props.fontSize || '1rem'};
    color: ${(props) => props.color || colors.textDark};
    gap: ${(props) => props.gap || 0};
`;

export const Box = styled.div`
    display: inline-block;
    padding: ${(props) => props.padding || '0'};
    margin: ${(props) => props.margin || '0'};
    width: ${(props) => props.width || 'fit-content'};
    font-size: inherit;
    background: ${(props) => props.background || 'transparent'};
    color: ${(props) => props.color || colors.textDark};
    height: fit-content;
`;

export const Link = styled.a`
    text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
    color: ${(props) => props.color || colors.primaryBlue};
    padding: ${(props) => props.padding || '0'};
    font-size: 14px;
    &:hover {
        text-decoration: underline;
    }
`;

export const AccordionContainer = styled(Flex)`
    flex-direction: column;
    background: ${colors.textLight};
    border-radius: 8px;
    border: solid 1px ${colors.border};
    > h3 {
        padding: 1rem;
        border-bottom: solid 1px ${colors.border};
    }
    margin: 1rem 0;
    overflow: hidden;
`;

export const Panel = styled(Flex)`
    background: ${colors.textLight};
    flex-direction: column;
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
    > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        font-size: 14px;
        height: 0;
        > ul {
            margin: 0.5rem 1.5rem;
            > li {
                margin: 0.5rem 0;
            }
        }
        > a {
            min-width: 25%;
            margin: 8px 0;
            @media (max-width: 768px) {
                min-width: 50%;
            }
        }
    }
`;
