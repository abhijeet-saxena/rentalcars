import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Main from '../index';

describe('<Main />', () => {
    afterAll(cleanup);

    test('Rendered Snapshot Matches', () => {
        const main = render(<Main />);
        expect(main).toMatchSnapshot();
    });
});
