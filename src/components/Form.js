import React, { useContext, useState } from "react";
import { CategoryContext } from "../contexs/CategoryContex";
import { CombinationContext } from "../contexs/CombinationContex";

const Form = () => {
  //context
  const { category } = useContext(CategoryContext);
  const { setSearch, setCalled } = useContext(CombinationContext);

  //state
  const [combination, setCombination] = useState({
    ingredient: "",
    category: "",
  });

  // funcion

  const getCombination = (e) => {
    setCombination({
      ...combination,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(combination);
    setCalled(true);
  };

  return (
    <form onSubmit={handleSubmit} className="form col-12">
      <fieldset>
        <legend>Search drink by category or ingredient</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="ingredient"
            type="text"
            className="form-control"
            placeholder="Search by ingredient"
            onChange={getCombination}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="category"
            onChange={getCombination}
          >
            <option defaultValue="">Open this select menu</option>
            {category.map((cat) => (
              <option key={cat.strCategory} value={cat.strCategory}>
                {" "}
                {cat.strCategory}{" "}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input className=" btn btn-primary" type="submit" value="Search" />
        </div>
      </div>
    </form>
  );
};

export default Form;
