import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeather } from '../actions';

const Capitals = (props) => {
    const dispatch = useDispatch();

    const capitals = useSelector(state => state.countries.map(country => ({name: country.capital, country: country.name})) );

    const clickHandler = (capital) => {
        dispatch(getWeather(capital));
    }

    return (
        <div className="capital-list">
            { capitals && capitals.length
                ? (
                    <>
                        <h4>Capitals</h4>
                        { capitals.map((capital, index) => (
                            <div className="capital" key={index} onClick={clickHandler.bind(this, capital.name)}>
                                <span>{capital.country}</span> &mdash; <span><strong>{capital.name}</strong></span>
                            </div>
                        ))}
                    </>
                )
                : <></>
            }
        </div>
    )
}

export default Capitals
