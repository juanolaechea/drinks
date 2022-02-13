import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CombinationContext = createContext();

const CombinationProvider = (props) => {
  const [query, setQuery] = useState([]);
  const [called, setCalled] = useState(false);
  const [search, setSearch] = useState({
    ingredient: "",
    category: "",
  });

  const { ingredient, category } = search;

  useEffect(() => {
    if (called) {
      const getQuery = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`;

        const result = await axios.get(url);
        //console.log(result.data.drinks);

        setQuery(result.data.drinks);
      };

      getQuery();
    }
  }, [search]);

  return (
    <CombinationContext.Provider
      value={{
        query,
        setSearch,
        setCalled,
      }}
    >
      {props.children}
    </CombinationContext.Provider>
  );
};

export default CombinationProvider;
