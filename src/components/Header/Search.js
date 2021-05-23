import React from 'react';
import { Flex, Box } from '../../common/components';
import {
    SearchContainer,
    FilterContainer,
    DateTimeContainer,
    DateTime,
    InputContainer,
    Autocomplete,
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
                    <input type="text" placeholder="Pick-Up Location"></input>
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
