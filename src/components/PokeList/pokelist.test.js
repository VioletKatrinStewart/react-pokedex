import PokeList from './PokeList';
import { render } from '@testing-library/react';

test('renders the pokemon names', () => {
  const pokeNames = render(<PokeList pokemon={['pikachu']} />);
  expect(pokeNames).toMatchSnapshot();
});
