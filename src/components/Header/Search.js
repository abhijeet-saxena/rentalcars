import React, { useRef, useEffect, useState } from 'react';
import { Flex, colors } from '../../common/styles';
import { debounce } from '../../common/helper';
import { SuggestionCard } from '../../common/components';
import {
    SearchContainer,
    FilterContainer,
    DateTimeContainer,
    DateTime,
    InputContainer,
    Autocomplete,
    Suggestions,
    Time,
} from './styles';

let times = [
    '00:00',
    '00:30',
    '01:00',
    '01:30',
    '02:00',
    '02:30',
    '03:00',
    '03:30',
    '04:00',
    '04:30',
    '05:00',
    '05:30',
    '06:00',
    '06:30',
    '07:00',
    '07:30',
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00',
    '22:30',
    '23:00',
    '23:30',
];

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
        <SearchContainer>
            <h3>Let’s find your ideal car</h3>
            <FilterContainer>
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
                    <label htmlFor="driver-age">Driver aged 30 – 65?</label>
                </Flex>
            </FilterContainer>
            <InputContainer>
                <Autocomplete>
                    <input
                        type="text"
                        placeholder="Pick-Up Location"
                        onChange={debounce(autoComplete)}
                        ref={search}
                    ></input>
                    {suggestions.length > 0 && (
                        <Suggestions id="suggestions">
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
                <DateTimeContainer>
                    <DateTime>
                        <input
                            type="date"
                            id="pickup-date"
                            name="pickup-date"
                        />
                        <Time>
                            <select name="pickup-time">
                                {times.map((item) => (
                                    <option value={item} key={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </Time>
                    </DateTime>
                    <DateTime>
                        <input type="date" id="drop-date" name="drop-date" />
                        <Time>
                            <select name="drop-time">
                                {times.map((item) => (
                                    <option value={item} key={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </Time>
                    </DateTime>
                </DateTimeContainer>
                <button type="button">Search</button>
            </InputContainer>
        </SearchContainer>
    );
};

export default Search;
