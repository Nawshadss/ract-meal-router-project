import React, { useEffect, useState } from "react";
import Meal from "./Meal";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const ShowDetails = () => {
  const [meal, setMeal] = useState([]);
  const navigate = useNavigate();
  const param = useParams();
  console.log(param.id);
  let id = param.id;

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((meal) => setMeal(meal.meals));
  }, []);

  console.log(meal);
  return (
    <div className="flex flex-col items-center">
      <button onClick={() => navigate(-1)} className="bg-teal-600 p-5">
        Back
      </button>
      <h1 className="text-4xl">Name id:{meal.length}</h1>
      {meal.map((meal) => (
        <Meal key={meal.idMeal} meal={meal}></Meal>
      ))}
    </div>
  );
};

export default ShowDetails;
