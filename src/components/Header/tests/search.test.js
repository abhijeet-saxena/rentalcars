import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Search from '../index';

afterEach(cleanup);

it('Rendered Snapshot Matches', () => {
    const search = render(<Search />);
    expect(search).toMatchSnapshot();
});
