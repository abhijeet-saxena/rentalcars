import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from '../index';

afterEach(cleanup);

it('Rendered Snapshot Matches', () => {
    const header = render(<Header />);
    expect(header).toMatchSnapshot();
});
