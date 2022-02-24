import React, { Fragment } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ListDrinks from "./components/ListDrinks";

import CategoryProvider from "./contexs/CategoryContex";
import CombinationProvider from "./contexs/CombinationContex";
import ModelProvider from "./contexs/ModalContext";

function App() {
  return (
    <CategoryProvider>
      <CombinationProvider>
        <ModelProvider>
          <Header messege="Your favorite Drinks!" />

          <div className="container mt-5 ">
            <div className="row">
              <Form />
            </div>
            <ListDrinks />
          </div>
        </ModelProvider>
      </CombinationProvider>
    </CategoryProvider>
  );
}

export default App;
