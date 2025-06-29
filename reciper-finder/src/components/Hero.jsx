import React, { useState } from 'react';

export default function Hero({ onSearch }) {
  const [term, setTerm] = useState('');
  const submit = () => term.trim() && onSearch(term.trim());

  return (
    <header className="hero">
      <div className="hero-content">
        <h1>Find Your Next Favorite Dish</h1>
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="e.g. Chicken Curry"
            value={term}
            onChange={e => setTerm(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && submit()}
          />
          <button onClick={submit}>Search</button>
        </div>
      </div>
    </header>
  );
}
