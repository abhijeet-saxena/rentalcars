export const mockedResp = ({ target: { value } }) => {
    if (value.length < 2) return [];
    if (value === 'asdf123')
        return [
            {
                name: 'No results found.',
            },
        ];

    return [
        {
            city: 'Sydney',
            country: 'Australia',
            name: 'Sydney Airport',
            region: 'New South Wales',
            placeType: 'A',
        },
        {
            city: '',
            country: 'Australia',
            name: 'Sydney',
            region: 'New South Wales',
            placeType: 'C',
        },
        {
            city: 'Sydney',
            country: 'Australia',
            name: 'Sydney Domestic Airport',
            region: 'New South Wales',
            placeType: 'A',
        },
        {
            city: 'Sydney',
            country: 'Australia',
            name: 'Sydney Central Train Station',
            region: 'New South Wales',
            placeType: 'T',
        },
        {
            city: '',
            country: 'Australia',
            name: 'Parramatta',
            region: 'New South Wales',
            placeType: 'C',
        },
        {
            city: '',
            country: 'Australia',
            name: 'Blacktown',
            region: 'New South Wales',
            placeType: 'C',
        },
    ];
};
