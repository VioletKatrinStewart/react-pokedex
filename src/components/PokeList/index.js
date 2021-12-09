import React from 'react';

export function PokeList({ pokemon }) {
  return (
    <div>
      {' '}
      {pokemon.map((poke) => (
        <p key={poke.id}>{poke.pokemon}</p>
      ))}
    </div>
  );
}
