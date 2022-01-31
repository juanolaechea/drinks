import React from "react";

const Form = () => {
  return (
    <from className="form col-12">
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
          />
        </div>
        <div className="col-md-4">
          <select
           className="form-control"
           name="category"
            >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-md-4">
            <input 
            className=" btn btn-primary" 
            type="sumbit"
            value="Search"/> 
       </div>
      </div>
    </from>
  );
};

export default Form;
