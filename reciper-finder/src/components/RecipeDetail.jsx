import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function RecipeDetail() {
  const { recipeId } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      .then(res => res.json())
      .then(data => setMeal(data.meals[0]));
  }, [recipeId]);

  if (!meal) return <p>Loading recipe…</p>;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const meas = meal[`strMeasure${i}`];
    if (ing?.trim()) ingredients.push(`${meas || ''} ${ing}`.trim());
  }

  return (
    <div className="detail">
      <Link to="/">← Back to Search</Link>
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p><strong>Category:</strong> {meal.strCategory}</p>
      <h3>Ingredients:</h3>
      <ul>{ingredients.map((item, i) => <li key={i}>{item}</li>)}</ul>
      <h3>Instructions:</h3>
      <p>{meal.strInstructions}</p>
    </div>
  );
}
