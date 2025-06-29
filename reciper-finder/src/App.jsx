import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';

export default function App() {
  const [query, setQuery] = useState('');

  return (
    <>
      <Hero onSearch={setQuery} />
      <Routes>
        <Route path="/" element={<HomePage query={query} onSearch={setQuery} />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
      </Routes>
    </>
  );
}
