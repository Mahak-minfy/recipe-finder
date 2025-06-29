import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeList({ recipes }) {
  return (
    <div className="recipe-grid">
      {recipes.map(meal => (
        <Link key={meal.idMeal} to={`/recipe/${meal.idMeal}`} className="card">
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <p>{meal.strMeal}</p>
        </Link>
      ))}
    </div>
  );
}
