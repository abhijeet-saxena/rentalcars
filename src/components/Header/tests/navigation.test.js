import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Navigation from '../index';

afterEach(cleanup);

it('Rendered Snapshot Matches', () => {
    const navigation = render(<Navigation />);
    expect(navigation).toMatchSnapshot();
});
