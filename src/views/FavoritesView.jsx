import MenuItem from "../components/MenuItem/MenuItem.jsx";
import styles from "./RestaurantView.module.css";
import NavBar from "../components/NavBar/NavBar.jsx";
import SearchField from "../components/SearchField/SearchField.jsx";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFavoritesContext } from "../context/favorites.jsx";
import { useDishesContext } from "../context/dishes.context.jsx";

const FavoritesView = () => {
  const { allDishes } = useDishesContext();
 

  const { favorites } = useFavoritesContext();
  console.log(allDishes);
  const [dishes, setDishes] = useState([]);

  // ✅ Use useEffect to update state without causing an infinite loop
  useEffect(() => {
    const filteredDishes = allDishes.filter((dish) => favorites.includes(dish.idMeal));
    setDishes(filteredDishes);
  }, [allDishes, favorites]); // Only runs when allDishes or favorites change

  return (
    <>
      <NavBar>
      <Link to="/"><h1>ReDI React Restaurant</h1></Link>
        <SearchField dishes={dishes} setDishes={setDishes} />
        <Link to="/favorites">MyFavorites</Link>
      </NavBar>

      <div className={styles.restaurantWrapper}>
        <div className={styles.menu}>
          {dishes?.length > 0 ? (
            dishes.map((dish) => (
              <MenuItem dish={dish} key={dish.idMeal} />
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
