import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext(null); 

export const useFavoritesContext = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error("useFavoritesContext must be used within a FavoritesContextProvider");
    }
    return context;
};

export const FavoritesContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    
    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};
