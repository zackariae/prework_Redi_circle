import styles from "./SearchField.module.css";
import { useState } from "react";

const SearchField = ({dishes,setDishes}) => {
  const [filter,setFilter] = useState('');

  const handleFilter = (e) => {
    setFilter(e.target.value);
    const filteredDishes = dishes.filter((dish) => dish.strMeal.toLowerCase().includes(e.target.value.toLowerCase()));
    setDishes(filteredDishes);
    
  }

  return (
    <div className={styles.wrapper}>
      <input
        placeholder="Filter dishes..."
        type="text" 
        onChange={(e) => handleFilter(e)}    
        value={filter}
      />
    </div>
  );
};

export default SearchField;
