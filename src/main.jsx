import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FavoritesContextProvider } from "./context/favorites.jsx";
import { DishesContextProvider } from "./context/dishes.context.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavoritesContextProvider>
    <DishesContextProvider>
      <App />
    </DishesContextProvider>
    
    </FavoritesContextProvider>
  </React.StrictMode>
);
