import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Flex, Box, Link, Badge, SuggestionCard, Drawer } from '../components';
import { colors } from '../helper';

afterEach(cleanup);

it('Rendered Snapshot Matches', () => {
    const flex = render(
        <Flex>
            <h1>lorem ipsum dolet</h1>
        </Flex>,
    );
    const box = render(
        <Box>
            <p>lorem ipsum dolet</p>
        </Box>,
    );
    const link = render(<Link href="#">lorem ipsum dolet</Link>);
    const badge = render(<Badge bg={colors.badgeBlue}></Badge>);
    const drawer = render(
        <Drawer closeMenu={() => {}} heading="Menu">
            <div>Children Element</div>
        </Drawer>,
    );
    const card = render(
        <SuggestionCard
            details={{
                city: 'Sydney',
                country: 'Australia',
                name: 'Sydney Airport',
                region: 'New South Wales',
                placeType: 'A',
                iata: 'SYD',
            }}
            setValue={() => {}}
        ></SuggestionCard>,
    );

    expect(flex).toMatchSnapshot();
    expect(box).toMatchSnapshot();
    expect(link).toMatchSnapshot();
    expect(badge).toMatchSnapshot();
    expect(drawer).toMatchSnapshot();
    expect(card).toMatchSnapshot();
});
