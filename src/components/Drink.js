import React from "react";

const Drink = ({ drink }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{drink.strDrink}</h2>
        <img className="card-img-top "  src={drink.strDrinkThumb} alt={drink.strDrink}/>

        <div className="card-body">
                <button className="btn btn-block btn-primary" 
                type="button"

                >Click for Recipes</button>

        </div>
      </div>
    </div>
  );
};

export default Drink;
