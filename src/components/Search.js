import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from '../actions';

const Search = (props) => {
    const dispatch = useDispatch();
    const [country, setCountry] = useState('');

    const changeHandler = e => {
        e.preventDefault();
        setCountry(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();
        if (country.length > 2) {
            dispatch(getCountries(country));
        }
    }

    return (
        <div>
            <label htmlFor="country">Country</label>
            <input id="country" type="text" name="country" autoComplete="off" value={country} onChange={changeHandler}/>
            <button type="button" onClick={submitHandler}>Search</button>
        </div>
    )
}

export default Search;
