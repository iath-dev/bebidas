import React from 'react';

const Context = React.createContext();

const Provider = (props) => {
    const [data, setData] = React.useState('Hola');

    return (
        <Context.Provider value={{ data }}>
            {props.children}
        </Context.Provider>
    )
}

export { Context as CategoryContext };

export default Provider;
