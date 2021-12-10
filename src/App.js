import './App.css';
import { useEffect, useState } from 'react';

import { Controls, PokeList } from './components';

import { getPokemon } from './services/pokemon';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query);
      setPokemon(data.results);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      {loading && <span className="loader"></span>}
      {!loading && (
        <>
          <Controls query={query} setQuery={setQuery} setLoading={setLoading} />
          <PokeList pokemon={pokemon} />
        </>
      )}
    </div>
  );
}

export default App;
