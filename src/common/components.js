import { Flex, Box, colors } from './styles';
import styled from 'styled-components';

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
