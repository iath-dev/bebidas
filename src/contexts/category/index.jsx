import React from 'react';
import Axios from 'axios';

const Context = React.createContext();

const Provider = (props) => {
    const [categories, setCategories] = React.useState([]);

    React.useEffect(() => {
        const getCategories = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const res = await Axios.get(url);

            setCategories(res.data.drinks);
        }

        getCategories();
    }, [])

    return (
        <Context.Provider value={{ categories }}>
            {props.children}
        </Context.Provider>
    )
}

export { Context as CategoryContext };

export default Provider;
