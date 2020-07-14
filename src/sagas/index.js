import { takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';
import * as watchers from './watchers';

const saga = function* (api) {
    yield takeLatest(actions.GET_COUNTRIES, watchers.getCountries, api);
    yield takeLatest(actions.GET_WEATHER, watchers.getWeather, api);
};

export default saga;