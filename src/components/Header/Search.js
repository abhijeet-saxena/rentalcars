import React, { useRef, useEffect, useState } from 'react';
import { Flex } from '../../common/components';
import { colors } from '../../common/helper';
import { debounce, times } from '../../common/helper';
import { SuggestionCard } from '../../common/components';
import {
    SearchContainer,
    FilterContainer,
    DateTime,
    InputContainer,
    Autocomplete,
    Suggestions,
    Time,
} from './styles';

const Search = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const search = useRef(null);

    useEffect(() => {
        document.addEventListener('click', (e) => {
            setSuggestions([]);
        });

        return document.removeEventListener('click', (e) => {
            setSuggestions([]);
        });
    }, []);

    const autoComplete = ({ target: { value } }) => {
        const searchText = value.trim();
        if (searchText === '' || searchText.length < 2) setSuggestions([]);
        else {
            setLoading(true);
            fetch(
                `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=${searchText}`,
            )
                .then((res) => res.json())
                .then((data) => setSuggestions([...data.results.docs]))
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        }
    };

    const setValue = (val) => {
        search.current.value = val;
        setSuggestions([]);
    };

    return (
        <SearchContainer data-testid="search">
            <h2>Let's find your ideal car</h2>
            <FilterContainer data-testid="filters">
                <Flex alignItems="center" width="auto">
                    <input type="checkbox" id="diff-location"></input>
                    <label htmlFor="diff-location">
                        Drop car off at different location
                    </label>
                </Flex>
                <Flex alignItems="center" width="auto">
                    <input
                        type="checkbox"
                        defaultChecked={true}
                        id="driver-age"
                    ></input>
                    <label htmlFor="driver-age">Driver aged 30 – 65 ?</label>
                </Flex>
            </FilterContainer>
            <InputContainer data-testid="inputs">
                <Autocomplete>
                    <input
                        type="text"
                        placeholder="Pick-Up Location"
                        onChange={debounce(autoComplete)}
                        ref={search}
                        aria-label="Enter Location"
                    ></input>
                    {suggestions.length > 0 && (
                        <Suggestions
                            id="suggestions"
                            role="alert"
                            aria-live="assertive"
                            aria-label={`Search results for ${
                                search.current.value
                            }. ${suggestions.reduce(
                                (acc, item) => (acc += `${item.name}, `),
                                '',
                            )}`}
                        >
                            {suggestions.map((item) => (
                                <SuggestionCard
                                    details={item}
                                    key={`${item.name}+${item.index}`}
                                    setValue={setValue}
                                ></SuggestionCard>
                            ))}
                        </Suggestions>
                    )}
                    {loading && (
                        <svg
                            fill={colors.textBlue}
                            viewBox="0 0 24 24"
                            height="20px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53A6.95 6.95 0 0 1 12 19z" />
                        </svg>
                    )}
                </Autocomplete>
                <Flex gap="0.75rem">
                    <DateTime>
                        <input
                            type="date"
                            id="pickup-date"
                            name="pickup-date"
                            defaultValue="2021-05-28"
                            aria-label="Enter Pickup date"
                        />
                        <Time>
                            <select
                                name="pickup-time"
                                defaultValue="10:30"
                                aria-label="Select Pickup Time"
                            >
                                {times.map((item) => (
                                    <option value={item} key={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </Time>
                    </DateTime>
                    <DateTime>
                        <input
                            type="date"
                            id="drop-date"
                            name="drop-date"
                            defaultValue="2021-06-01"
                            aria-label="Enter Drop date"
                        />
                        <Time>
                            <select
                                name="drop-time"
                                defaultValue="15:30"
                                aria-label="Select Drop Time"
                            >
                                {times.map((item) => (
                                    <option value={item} key={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </Time>
                    </DateTime>
                </Flex>
                <button type="button">Search</button>
            </InputContainer>
        </SearchContainer>
    );
};

export default Search;
