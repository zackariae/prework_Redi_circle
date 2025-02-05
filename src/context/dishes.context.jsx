import { createContext, useContext, useState } from "react";

export const DishesContext = createContext(null); 

export const useDishesContext = () => {
    const allDishes = useContext(DishesContext);
    if (!allDishes) {
        throw new Error("useDishesContext must be used within a DishesContextProvider");
    }
    return allDishes;
};

export const DishesContextProvider = ({ children }) => {
    const [allDishes, setAllDishes] = useState([]);
    
    return (
        <DishesContext.Provider value={{ allDishes, setAllDishes }}>
            {children}
        </DishesContext.Provider>
    );
};
