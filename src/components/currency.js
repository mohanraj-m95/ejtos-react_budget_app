import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrency = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

    return (
        <div className='alert alert-success'>
            <span>Currency :</span><select onChange={handleCurrency} value={currency}>
                <option value='$'>$ Doller</option>
                <option value='£'>£ pound</option>
                <option value='₹'>₹ Rupee</option>
                <option value='€'>€ Euro</option>
            </select>
        </div>
    );
};
export default Currency;