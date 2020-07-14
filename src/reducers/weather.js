import * as actions from '../actions';

const defaultState = {

};

const weatherReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.SET_WEATHER:
            return action.payload;
        case actions.CLEAR_WEATHER:
            return {};
        default:
            return state;
    }
}

export default weatherReducer;