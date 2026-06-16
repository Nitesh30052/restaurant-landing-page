import "./index.css";

const DishCard = ({ dish }) => {
  return (
    <div className="dish-card">
      <img
        src={dish.image}
        alt={dish.dish_name}
        className="dish-image"
      />

      <h3 className="dish-name">
        {dish.dish_name}
      </h3>

      <p className="dish-price">
        {dish.currency}
        {dish.price}
      </p>
    </div>
  );
};

export default DishCard;