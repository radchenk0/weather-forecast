import React from 'react';
import { useSelector } from 'react-redux';

const Weather = (props) => {
    const weather = useSelector(state => state.weather);
    console.log(weather)
    return (
        <div>
            { Object.keys(weather).length !== 0 && (
                <>
                    <h4>Forecast</h4>
                    <div>
                        { weather.location && Object.keys(weather.location).length !== 0 && (
                            <>
                                <div>City: {weather.location.name}</div>
                                <div>Country: {weather.location.country}</div>
                                <div>Time: {weather.location.localtime}</div>
                                <hr/>
                            </>
                        )}
                        { weather.current && Object.keys(weather.current).length !== 0 && (
                            <>
                                <div>Tempreture {weather.current.temp_c}&#x2103;</div>
                                <div>Wind: {weather.current.wind_kph}kph</div>
                                <div>Humidity: {weather.current.humidity}%</div>
                                <div className="weather-condition">
                                    <div>Condition: {weather.current.condition.text}</div>
                                    <div>
                                        <img height="30" src={weather.current.condition.icon} alt="Condition"/>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </>
            )} 
        </div>
    )
}

export default Weather;