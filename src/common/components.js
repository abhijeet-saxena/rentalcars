import { colors } from './helper';
import styled from 'styled-components';

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

const Badge = styled(Box)`
    background: ${(props) => props.bg};
    color: ${(props) =>
        props.bg !== colors.badgeYellow ? colors.textLight : colors.textDark};
    padding: 2px 4px;
    min-width: 70px;
    border-radius: 4px;
    text-align: center;
    font-size: 12px;
`;

export const SuggestionCard = ({ details, setValue }) => {
    const {
        city = '',
        country = '',
        name = '',
        region = '',
        placeType = '',
        iata = '',
    } = details;

    if (name === 'No results found.')
        return <p style={{ padding: '0.5rem' }}>{name}</p>;

    const badgeColors = {
        A: { bg: colors.badgeRed, text: 'Airport' },
        C: { bg: colors.badgeBlue, text: 'City' },
        T: { bg: colors.badgeGray, text: 'Station' },
        D: { bg: colors.badgeYellow, text: 'Region' },
        P: { bg: colors.badgeYellow, text: 'Region' },
    };

    const handleClick = (event) => {
        event.preventDefault();
        let value = name;
        if (iata) value += ` (${iata})`;
        if (city) value += `, ${city}`;
        if (country) value += `, ${country}`;
        setValue(value);
    };

    return (
        <Flex gap="1rem" onClick={handleClick}>
            <Badge
                bg={
                    badgeColors[placeType]
                        ? badgeColors[placeType].bg
                        : colors.textLight
                }
            >
                {badgeColors[placeType] ? badgeColors[placeType].text : ''}
            </Badge>
            <div>
                <p>
                    {name} {iata && `(${iata})`}
                </p>
                <small>
                    {city && `${city}, `} {region && `${region}, `} {country}
                </small>
            </div>
        </Flex>
    );
};
