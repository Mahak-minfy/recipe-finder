import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';

export default function HomePage({ query, onSearch }) {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const categories = ['Egg', 'Chicken', 'Pizza', 'Breakfast', 'Seafood'];

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then(res => res.json())
      .then(data => setRecipes(data.meals || []))
      .finally(() => setIsLoading(false));
  }, [query]);

  return (
    <div className="home">
      <div className="categories">
        {categories.map(cat => (
          <button key={cat} onClick={() => onSearch(cat)}>
            {cat}
          </button>
        ))}
      </div>
      {isLoading && <p>Searching for recipes…</p>}
      {!isLoading && !recipes.length && query && (
        <p>No recipes found for "{query}".</p>
      )}
      <RecipeList recipes={recipes} />
    </div>
  );
}
