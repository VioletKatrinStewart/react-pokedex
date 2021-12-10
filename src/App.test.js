import { render, screen } from '@testing-library/react';
import App from './App';

test('renders pokemon list', () => {
  render(<App />);
  const header = screen.getByText(/Pokedex/i);
  expect(header).toBeInTheDocument();
});
