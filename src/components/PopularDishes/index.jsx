import { useEffect, useState } from "react";
import DishCard from "../DishCard";
import "./index.css";

const PopularDishes = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await fetch(
          "https://nxtwave-assessments-backend-nxtwave-media-static.s3-ap-south-1.amazonaws.com/topin_beta/media/content_loading/uploads/5ba7588b-5c53-4aef-a473-b5eaf2e6dca4_food.json"
        );

        const data = await response.json();

        setDishes(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDishes();
  }, []);

  return (
    <section className="popular-section" id="menu">
      <p className="featured-menu">
        FEATURED MENU
      </p>

      <h2 className="popular-title">
        DISCOVER OUR MOST
        <br />
        POPULAR DISHES
      </h2>

      <div className="dishes-scroll">
        {dishes.map((dish) => (
          <DishCard
            key={dish.id}
            dish={dish}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularDishes;