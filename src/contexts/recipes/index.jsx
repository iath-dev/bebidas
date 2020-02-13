import React from 'react';
import Axios from 'axios';

const Context = React.createContext();

const Provider = (props) => {

    const [drinks, setDrinks] = React.useState([]);
    const [search, setSearch] = React.useState({
        ingredient: '',
        category: '',
    })
    const [consult, setConsult] = React.useState(false);

    React.useEffect(() => {
        const getRecipes = async () => {
            if (consult) {
                const { ingredient, category } = search;
                const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`;
                const response = await Axios.get(URL);
                setDrinks(response.data.drinks);
                setConsult(false);
            }
        }
        getRecipes();
    }, [search, consult]);

    return (
        <Context.Provider value={{ setSearch, setConsult, drinks }}>
            {props.children}
        </Context.Provider>
    )
}

export { Context as RecipesContext };

export default Provider;
