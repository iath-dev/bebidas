import React from 'react';
import { CategoryContext } from '../../contexts/category';

const Form = () => {

    const { categories } = React.useContext(CategoryContext);

    return ( 
        <form className="col-md-12 mt-2">
            <fieldset className="text-center">
                <legend>Buscar bebidas por Categoría o Ingrediente</legend>
            </fieldset>

            <div className="row">
                <div className="col-md-4">
                    <input
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Ingrediente"
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="category"
                    >
                        <option value="">--Seleccione una Categoría...</option>
                        {categories.map((category) => (
                            <option value={category.strCategory} key={category.strCategory}>
                                {category.strCategory}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-primary btn-block"
                        value="Buscar Bebidas"

                    />
                </div>
            </div>

        </form>
     );
}
 
export default Form;
