import React from 'react';

export default function PokeList({ pokemon, currentPage, setCurrentPage, setLoading }) {
  const handleNextPage = () => {
    setCurrentPage((prevState) => ++prevState);
    setLoading(true);
  };
  return (
    <div>
      {pokemon.map((poke) => (
        <div key={poke.id}>
          <p>{poke.pokemon}</p>
          <p>{poke.weight}</p>
          <p>{poke.type_1} </p>
          <p>{poke.hp}</p>
          <p>{poke.speed}</p>
          <p>{poke.type_2}</p>
        </div>
      ))}
      <div style={{ color: 'black', fontWeight: 'bold' }}>Page: {currentPage}</div>
      <button onClick={handleNextPage}>Next Page</button>
    </div>
  );
}
