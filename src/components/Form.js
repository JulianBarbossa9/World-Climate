import React, {useState} from 'react';

const Form = () => {
    
    const [ search, keepSearch ] = useState({
        city:'',
        country:''
    });

    const { city , country} = search; 

    //HandleChange -- función que coloca los elementos del onchange 
    const handleChange = (e) => {
        keepSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }
    
    
    return (  
        <form>
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onClick={handleChange}
                    />
                <label htmlFor="city">City: </label>
            </div>

            <div className="input-field col s12">
                <select
                    name="country"
                    id="country"
                    value={country}
                    onClick={handleChange}
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
        </form>
    );
}
 
export default Form;