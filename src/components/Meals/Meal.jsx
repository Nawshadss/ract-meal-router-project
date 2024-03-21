import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Meal = ({ meal, navigate }) => {
  const { strCategory, idMeal, strMeal } = meal;
  console.log(meal, navigate);
  return (
    <div className="border border-yellow-400 rounded-lg p-3">
      <h1>ID:{idMeal}</h1>
      <h1>Category:{strCategory}</h1>
      <h1>Name:{strMeal}</h1>
      {navigate ? (
        <button
          onClick={() => navigate(`/${idMeal}`)}
          className="btn bg-white text-black rounded-md"
        >
          Show recipie
        </button>
      ) : null}
    </div>
  );
};

export default Meal;
