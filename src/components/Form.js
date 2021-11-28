import React from 'react';

const Form = () => {
    return (  
        <form>
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                />
                <label htmlFor="city">City: </label>
            </div>

            <div className="input-field col s12">
                <select
                    name="country"
                    id="country"
                >
                    <option value="">-- Select country --</option>
                </select>
                <label htmlFor="country">Country: </label>
            </div>
        </form>
    );
}
 
export default Form;