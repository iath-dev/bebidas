import React from 'react';
import Axios from 'axios';

const Context = React.createContext();

const Provider = (props) => {
    const [idDrink, setIdDrink] = React.useState('');
    const [recipe, setRecipe] = React.useState({});

    React.useEffect(() => {
        const getDrink = async () => {
            if (idDrink) {
                const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
                const response = await Axios(URL);
    
                setRecipe(response.data.drinks[0]);
                return;
            }
            setRecipe({});
        }
        getDrink()
    }, [idDrink]);

    return (
        <Context.Provider value={{ recipe, setIdDrink }}>
            {props.children}
        </Context.Provider>
    )
}

export { Context as ModalContext };

export default Provider;
