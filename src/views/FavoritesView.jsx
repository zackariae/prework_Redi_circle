import MenuItem from "../components/MenuItem/MenuItem.jsx";

import styles from "./RestaurantView.module.css";
import NavBar from "../components/NavBar/NavBar.jsx";
import SearchField from "../components/SearchField/SearchField.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useFavoritesContext } from "../context/favorites.jsx";
import { useDishesContext } from "../context/dishes.context.jsx";

const FavoritesView = () => {
  const { allDishes } = useDishesContext();
  const [dishes, setDishes] = useState([]);

  const { favorites } = useFavoritesContext();

  // filter allDishes based on favorites
  const filteredDishes = allDishes.filter((dish) => favorites.includes(dish.id));
  setDishes(filteredDishes);

  return (
    <>
      <NavBar>
        <h1>ReDI React Restaurant</h1>

        <SearchField dishes={dishes} setDishes={setDishes}/>
        <Link to="/favorites">MyFavorites</Link>
      </NavBar>

      <div className={styles.restaurantWrapper}>
        <div className={styles.menu}>
          {dishes.length > 0 ? (
            dishes.map((dish) => (
              <MenuItem
                dish={dish}
                key={dish.idMeal}
              />
            ))
          ) : (
            <p>No dishes found :(</p>
          )}
        </div>
      </div>
    </>
  );
};

export default FavoritesView;
