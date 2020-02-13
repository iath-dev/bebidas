import React from 'react';
import { RecipesContext } from '../../contexts/recipes';
import { Drink } from '..';

const DrinksList = () => {

    const { drinks } = React.useContext(RecipesContext);

    return (
        <div className="row mt-5">
            {drinks.map(drink => (
                <Drink drink={drink} key={drink.idDrink} />
            ))}
        </div>
    )
}

export default DrinksList;
