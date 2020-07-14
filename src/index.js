import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Api from './api';
import './assets/index.css';

const api = new Api();

api.getCountries({q: 'russia'})
    .then(countries => api.getWeather({q: countries[0].capital.toLowerCase()}))
    .then(weather => console.log(weather));

ReactDOM.render(
    <App />,
    document.getElementById('root')
);