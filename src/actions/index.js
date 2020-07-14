const action = (type, value) => ({type, payload: value});

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const SET_COUNTRIES = 'SET_COUNTRIES';
export const getCountries = payload => action(GET_COUNTRIES, payload);
export const setCountries = payload => action(SET_COUNTRIES, payload);


export const GET_WEATHER = 'GET_WEATHER';
export const SET_WEATHER = 'SET_WEATHER';
export const CLEAR_WEATHER = 'CLEAR_WEATHER';
export const getWeather = payload => action(GET_WEATHER, payload);
export const setWeather = payload => action(SET_WEATHER, payload);
export const clearWeather = () => action(CLEAR_WEATHER);

