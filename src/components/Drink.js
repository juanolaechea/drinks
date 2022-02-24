import React, { useContext, useState } from "react";
import { ModalContext } from "../contexs/ModalContext";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    height:650,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Drink = ({ drink }) => {
  //modal
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { recipe, setRecipe, setIdCombination } = useContext(ModalContext);

  const showIngredient = info => {
    let ingredient = [];
    for(let i = 1; i < 16; i++){
        if( info[`strIngredient${i}`] ) {
            ingredient.push(
                <li> { info[`strIngredient${i}`] }  { info[`strMeasure${i}`] }</li>
            )
        }
    }

    return ingredient;
}

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{drink.strDrink}</h2>
        <img
          className="card-img-top "
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
        />

        <div className="card-body">
          <button
            className="btn btn-block btn-primary"
            type="button"
            onClick={() => {
              setIdCombination(drink.idDrink);
              handleOpen();
            }}
          >
            Click for Recipes
          </button>
          <Modal
            open={open}
            onClose={() => {
              setIdCombination(null);
              setRecipe({});
              handleClose();
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h4 className="mt-4" >{recipe.strDrink}</h4>
              <h4>Instructions</h4>
              <p>{recipe.strInstructions}</p>
              <img className="img-fluid my-1" src={recipe.strDrinkThumb} />

              <h4>Ingredients and Amounts</h4>
              <ul>{showIngredient(recipe)}</ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Drink;
