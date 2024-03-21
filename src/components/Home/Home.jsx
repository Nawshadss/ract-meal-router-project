import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Meal from "../Meals/Meal";

const Home = () => {
  const navigate = useNavigate();
  const { meals } = useLoaderData();
  console.log(meals);
  return (
    <div className="my-5">
      <h1 className="text-4xl font-extrabold text-center">Home</h1>

      <div className="my-7 grid grid-cols-4 gap-4">
        {meals.map((meal) => (
          <Meal meal={meal} navigate={navigate}></Meal>
        ))}
      </div>
    </div>
  );
};

export default Home;
