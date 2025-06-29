import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');
  const submit = () => term.trim() && onSearch(term.trim());

  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search recipes..."
        value={term}
        onChange={e => setTerm(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && submit()}
      />
      <button onClick={submit}>Search</button>
    </div>
  );
}
