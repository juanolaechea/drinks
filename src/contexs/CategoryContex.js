import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const CategoryContext = createContext();

const CategoryProvider = (props) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

      const categories = await axios.get(url);

      setCategory(categories.data.drinks);
    };
    getCategory();
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        category
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
