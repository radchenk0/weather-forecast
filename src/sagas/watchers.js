import { call, put } from 'redux-saga/effects';
import * as actions from '../actions';

export const getCountries = function* (api, action) {
    try {
        const payload = {
            q: action.payload,
        }
        yield put(actions.clearWeather());
        const countries = yield call(api.getCountries, payload);
        yield put(actions.setCountries(countries));
    } catch (e) {
        console.log(e);
    }
};

export const getWeather = function* (api, action) {
    try {
        const payload = {
            q: action.payload,
        }
        const weather = yield call(api.getWeather, payload);
        yield put(actions.setWeather(weather));
    } catch (e) {
        console.log(e);
    }
};