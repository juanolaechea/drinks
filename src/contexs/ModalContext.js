import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [idCombination, setIdCombination] = useState(null);
  const [recipe, setRecipe] = useState({});
 

  useEffect(() => {
   
      const getSearch = async () => {
          if(!idCombination) return ;
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idCombination}`;
        const result = await axios.get(url);

        console.log(result.data.drinks[0]);

        setRecipe(result.data.drinks[0]);
      };

      getSearch();
    
  }, [idCombination]);

  return (
    <ModalContext.Provider
      value={{
        recipe,
        setRecipe,
        setIdCombination
      
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
