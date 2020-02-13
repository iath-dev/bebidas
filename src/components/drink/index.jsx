import React from 'react';
import { ModalContext } from '../../contexts/modal';
import { makeStyles, Modal } from '@material-ui/core';
import PropTypes from 'prop-types';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Drink = ({ drink }) => {
    const [ modalStyle ] = React.useState(getModalStyle)
    const [open, setOpen] = React.useState(false);
    const { recipe, setIdDrink } = React.useContext(ModalContext);


    const classes = useStyles();
    
    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setIdDrink('');
        setOpen(false);
    };

    const getIngredients = () => {
        let ingredients = [];
        for (let index = 1; index < 16; index++) {
            if (recipe[`strIngredient${index}`]) {
                ingredients.push(
                    <li>
                        {recipe[`strIngredient${index}`]}
                        <span className="mx-1">
                            {recipe[`strMeasure${index}`]}
                        </span>
                    </li>
                )
            }
        }
        return ingredients;
    }

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{drink.strDrink}</h2>
                <img className="card-img-top" src={drink.strDrinkThumb} alt={drink.strDrink} />
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            setIdDrink(drink.idDrink);
                            handleOpen();
                        }}
                    >
                        VER RECETA
                    </button>
                </div>
            </div>
            <Modal open={open} onClose={handleClose}>
                <div style={modalStyle} className={classes.paper}>
                    <h2 id="simple-modal-title">{recipe.strDrink}</h2>
                    <h3 className="mt-4">Instrucciones</h3>
                    <p id="simple-modal-description">
                        {recipe.strInstructions}
                    </p>
                    <img className="img-fluid my-4" src={recipe.strDrinkThumb} alt={recipe.strDrink} />
                    <h3>Ingredientes y Cantidades</h3>
                    <ul>
                        {getIngredients()}
                    </ul>
                </div>
            </Modal>
        </div>
     );
}

Drink.propTypes = {
    drink: PropTypes.object.isRequired,
}
 
export default Drink;
