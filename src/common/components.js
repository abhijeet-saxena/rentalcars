import styled from 'styled-components';
import { colors } from './helper';
import dismiss from '../assets/images/dismiss.svg';

export const Flex = styled.div`
    display: flex;
    flex-direction: ${(props) => props.flexDirection || 'row'};
    padding: ${(props) => props.padding || '0'};
    margin: ${(props) => props.margin || '0'};
    width: ${(props) => props.width || '100%'};
    justify-content: ${(props) => props.justifyContent || 'normal'};
    align-items: ${(props) => props.alignItems || 'normal'};
    background: ${(props) => props.background || 'none'};
    font-size: ${(props) => props.fontSize || 'inherit'};
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

export const Badge = styled(Box)`
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
        D: { bg: colors.secondaryGreen, text: 'District' },
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

    console.log(details);

    return (
        <Flex gap="1rem" onClick={handleClick} data-testid="drawer">
            <Badge
                bg={
                    badgeColors[placeType]
                        ? badgeColors[placeType].bg
                        : colors.secondaryGreen
                }
            >
                {badgeColors[placeType] ? badgeColors[placeType].text : 'Place'}
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

const DrawerContainer = styled(Flex)`
    flex-direction: column;
    padding: 0.5rem 0;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: ${colors.textLight};
    top: -1rem;
    left: -1rem;
    z-index: 1;
    > .header {
        padding: 0.5rem 1rem;
        > button {
            background: none;
            padding: 0;
            height: auto;
        }
    }
    hr {
        border: solid 0.5px ${colors.border};
        opacity: 0.25;
    }
`;

export const Drawer = ({ children, closeMenu = () => {}, heading = '' }) => {
    return (
        <DrawerContainer data-testid="drawer">
            <Flex
                className="header"
                justifyContent="space-between"
                alignItems="center"
            >
                <div>{heading}</div>
                <button
                    type="button"
                    onClick={closeMenu}
                    aria-label="Close Menu"
                >
                    <img src={dismiss} alt="" />
                </button>
            </Flex>
            <hr></hr>
            {children}
        </DrawerContainer>
    );
};

const SuggestionsContainer = styled(Flex)`
    position: absolute;
    z-index: 1;
    top: 100%;
    flex-direction: column;
    background: ${colors.textLight};
    border: solid 1px ${colors.textDark};
    border-radius: 4px;
    cursor: pointer;
    > div {
        min-height: 54px;
        padding: 0.5rem;
        border-bottom: solid 1px ${colors.border};
        &:hover {
            background: ${colors.primaryBlueLight};
        }
    }
`;

export const Suggestions = ({
    searchVal = '',
    suggArr = [],
    setValue = () => {},
}) => (
    <SuggestionsContainer
        data-testid="suggestions"
        id="suggestions"
        role="alert"
        aria-live="assertive"
        aria-label={`Search results for ${searchVal}. ${suggArr.reduce(
            (acc, item) => (acc += `${item.name}, `),
            '',
        )}`}
    >
        {suggArr.map((item) => (
            <SuggestionCard
                details={item}
                key={`${item.name}+${item.index}`}
                setValue={setValue}
            ></SuggestionCard>
        ))}
    </SuggestionsContainer>
);
