import React from 'react';
import { Button } from '@mui/material';

export function Controls({ query, setQuery, setLoading }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokemon"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <Button variant="contained" onClick={() => setLoading(true)}>
        Search
      </Button>
    </div>
  );
}
