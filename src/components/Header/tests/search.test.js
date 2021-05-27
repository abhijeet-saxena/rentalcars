import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Search from '../search';
import { Suggestions } from '../../../common/components';
import { mockedResp } from './mock';

describe('<Search />', () => {
    afterAll(cleanup);

    test('Rendered Snapshot Matches', () => {
        const search = render(<Search />);
        expect(search).toMatchSnapshot();
    });

    test('Search Displayed', () => {
        const { getByTestId } = render(<Search />);
        const search = getByTestId('search');

        expect(search.querySelector('h2')).toHaveTextContent(
            `Let's find your ideal car`,
        );
        expect(search.querySelector('button')).toHaveTextContent('Search');
    });

    test('Checkbox toggles', () => {
        const { getByTestId } = render(<Search />);
        const filters = getByTestId('filters');
        const cb = filters.querySelector('input');

        expect(cb.checked).toEqual(false);
        fireEvent.change(cb, { target: { checked: true } });
        expect(cb.checked).toEqual(true);
    });

    test('Pickup Date and time works', () => {
        const { getByTestId } = render(<Search />);
        const inputs = getByTestId('inputs');
        const pickupDate = inputs.querySelector('#pickup-date');
        const pickupTime = inputs.querySelector('#pickup-time');

        expect(pickupDate.value).toEqual('2021-05-28'); // default pickup-date
        fireEvent.change(pickupDate, { target: { value: '2021-06-01' } });
        expect(pickupDate.value).toEqual('2021-06-01'); // updated pickup-date

        expect(pickupTime.value).toEqual('10:30'); // default pickup-time
        fireEvent.change(pickupTime, { target: { value: '23:30' } });
        expect(pickupTime.value).toEqual('23:30'); // updated pickup-time
    });

    test('Drop Date and time works', () => {
        const { getByTestId } = render(<Search />);
        const inputs = getByTestId('inputs');
        const dropDate = inputs.querySelector('#drop-date');
        const dropTime = inputs.querySelector('#drop-time');

        expect(dropDate.value).toEqual('2021-06-01'); // default drop-date
        fireEvent.change(dropDate, { target: { value: '2021-06-05' } });
        expect(dropDate.value).toEqual('2021-06-05'); // updated drop-date

        expect(dropTime.value).toEqual('15:30'); // default drop-time
        fireEvent.change(dropTime, { target: { value: '00:30' } });
        expect(dropTime.value).toEqual('00:30'); // updated drop-time
    });
});

describe('Autocomplete Working', () => {
    afterAll(cleanup);

    let { getByTestId } = render(<Search />);
    const search = getByTestId('inputs');
    const ip = search.querySelector('input');
    let results = [];

    test('Input is empty', () => {
        expect(ip.value).toEqual('');
    });

    test('Different Inputs', () => {
        const mockFn = jest.fn((e) => {
            results = mockedResp(e);
        });
        ip.addEventListener('change', mockFn);

        // Test for single character
        fireEvent.change(ip, { target: { value: 'a' } });
        expect(ip.value).toEqual('a');
        const { rerender, getByTestId } = render(
            <Suggestions
                searchVal="a"
                suggArr={results}
                setValue={() => {}}
            ></Suggestions>,
        );
        const suggestions = getByTestId('suggestions');
        expect(suggestions.children.length).toBe(0);

        // Test for valid search query, should return 6 results
        fireEvent.change(ip, { target: { value: 'sydney' } });
        expect(ip.value).toEqual('sydney');
        rerender(
            <Suggestions
                searchVal="sydney"
                suggArr={results}
                setValue={() => {}}
            ></Suggestions>,
        );
        expect(suggestions.children.length).toBe(6);
        expect(suggestions).toHaveTextContent('Sydney Central Train Station');

        // Test for invalid search query, should return 1 result
        fireEvent.change(ip, { target: { value: 'asdf123' } });
        expect(ip.value).toEqual('asdf123');
        rerender(
            <Suggestions
                searchVal="asdf123"
                suggArr={results}
                setValue={() => {}}
            ></Suggestions>,
        );
        expect(suggestions.children.length).toBe(1);
        expect(suggestions).toHaveTextContent('No results found');
    });
});
