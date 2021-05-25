import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders App component', () => {
    render(<App />);
    const linkElement = screen.getByText(/Car Hire – Search, Compare & Save/i);
    expect(linkElement).toBeInTheDocument();
});
