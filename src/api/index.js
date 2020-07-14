import axios from 'axios';

class Api {
    constructor() {
        this.countries = axios.create({
            baseURL: process.env.REACT_APP_COUNTRIES_API_URL,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        });

        this.weather = axios.create({
            baseURL: process.env.REACT_APP_WEATHER_API_URL,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            transformRequest: (data, headers) => {
                const extendedData = { ...data, key: process.env.REACT_APP_WEATHER_SECRET_KEY };
                return Object.entries(extendedData)
                .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
                .join('&')
            }
        });
    }
    
    getCountries = (data) => this.countries.get(`/name/${data.q}`).then(resp => resp.data);
    getWeather = (data) => this.weather.post('', data).then(resp => resp.data);
}

export default Api;