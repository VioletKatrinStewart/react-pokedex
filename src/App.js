import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon } from './services/pokemon';
import PokeList from './components/PokeList/PokeList';
import Controls from './components/Controls/Controls';
function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [order, setOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // let timer;
    const fetchData = async () => {
      const data = await getPokemon(query, order, currentPage);
      setPokemon(data.results);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query, order, currentPage]);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Controls
        query={query}
        setQuery={setQuery}
        setLoading={setLoading}
        order={order}
        setOrder={setOrder}
      />
      {loading && <span className="loader"></span>}
      {!loading && (
        <PokeList
          pokemon={pokemon}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          loading={loading}
          setLoading={setLoading}
        />
      )}
    </div>
  );
}

export default App;
