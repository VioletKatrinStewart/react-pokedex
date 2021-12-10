import React from 'react';
import Button from '@mui/material/Button';

export default function Controls({ query, setQuery, setLoading, order, setOrder }) {
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
      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <Button varient="contained" onClick={() => setLoading(true)}>
        Search
      </Button>
    </div>
  );
}
