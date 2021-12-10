import React from 'react';
import { Pages } from '../Pages';

export function PokeList({ pokemon }) {
  return (
    <>
      <div>
        {pokemon.map((poke) => (
          <p key={poke.id}>{poke.pokemon}</p>
        ))}
      </div>
      <Pages />
    </>
  );
}
