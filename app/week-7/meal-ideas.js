"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  console.log("Fetching meals for ingredient:", ingredient);
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`
  );
  const data = await res.json();
  console.log("API response meals count:", data.meals?.length || 0);
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    console.log("MealIdeas component received ingredient:", ingredient);
    const result = await fetchMealIdeas(ingredient);
    setMeals(result);
  }

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  if (!ingredient) {
    return (
      <div>
        <h3>Meal Ideas (select an item to view) </h3>
      </div>
    );
  }

    return (
        <div>
            <p>Meal ideas for "{ingredient}"</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "4px" }}>
                {meals.map((meal) => (
                    <div
                        key={meal.idMeal}
                        style={{
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            padding: "16px",
                            boxShadow: "2px 2px 6px rgba(0,0,0,0.1)",
                            backgroundColor: "#fff",
                            wordWrap: "break-word",
                            overflowWrap: "break-word",
                        }}
                    >
                        {meal.strMeal}
                    </div>
                ))}
            </div>
        </div>
    );
}