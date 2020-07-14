import { combineReducers } from 'redux';
import weather from './weather.js'
import countries from './countries.js'

const reducer = combineReducers({
    weather,
    countries
})

export default reducer;