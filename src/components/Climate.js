import React from 'react';
import PropTypes from 'prop-types';

const Climate = ({result}) => {
   
   // Extraer valores
   const {name, main} = result;
   
   // Un if que previne que este componente cargue
    if (!name) return null;

    // Pasar a grados C
    const kelvin = 273.15;

    return (  
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>The climate the {name} is:</h2>
                <p className="temperatura">
                    { parseFloat(main.temp - kelvin, 10).toFixed(2)} <span> &#x2103; </span>
                </p>
                <p> Temperature Max:
                    { parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span> &#x2103; </span>
                </p>
                <p> Temperature Min:
                    { parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span> &#x2103; </span>
                </p>
            </div>
        </div>
    );
}

Climate.propTypes = {
    result:PropTypes.object.isRequired
}
 
export default Climate;