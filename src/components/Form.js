import React, {useState} from 'react';

const Form = ({search, keepSearch, keepQuery}) => {
    
    

    const [error, keepError] = useState(false); 

    const { city , country} = search; 

    //HandleChange -- función que coloca los elementos del onchange 
    const handleChange = (e) => {
        keepSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }
    //Cuando el usuario envie la información, verificar si no esta vacia
    const handleSubmit = e => {
        e.preventDefault();

        //validar
        if(city.trim() === ''  || country.trim() === ''){
            keepError(true);
            return; 
        }

        keepError(false);

        //Pasar al componente
        keepQuery(true);
    }
    
    return (  
        <form
            onSubmit = {handleSubmit}
        >
            {error ? <p className ="red darken-4 error">Please fill all fields</p> : null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={handleChange}
                />
                <label htmlFor="city">City: </label>
            </div>

            <div className="input-field col s12">
                <select
                    name="country"
                    id="country"
                    value={country}
                    onChange={handleChange}
                >
                    <option value="">-- Select country --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="country">Country: </label>
            </div>

            <div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                >Buscar Clima</button>
            </div>
        </form>
    );
}
 
export default Form;