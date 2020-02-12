import React from 'react';

const Form = () => {
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
