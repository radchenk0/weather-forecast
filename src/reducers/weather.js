import * as actions from '../actions';

const defaultState = {

};

const weatherReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.SET_WEATHER:
            return action.payload;
        default:
            return state;
    }
}

export default weatherReducer;