import React, { Fragment } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ListDrinks from "./components/ListDrinks";

import CategoryProvider from "./contexs/CategoryContex";
import CombinationProvider from "./contexs/CombinationContex";

function App() {
  return (
    <CategoryProvider>
      <CombinationProvider>
        <Header messege="Your favorite Drinks!" />

        <div className="container mt-5 ">
          <div className="row">
            <Form />
          </div>
        <ListDrinks/>
        </div>


        
      </CombinationProvider>
    </CategoryProvider>
  );
}

export default App;
