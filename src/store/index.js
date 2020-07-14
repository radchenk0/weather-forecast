import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from '../middleware';

const configStore = reducer => { 
    const sagaMiddleware = createSagaMiddleware();
    let middleWares = [sagaMiddleware];

    if (process.env.NODE_ENV === "development") {
      middleWares.unshift(loggerMiddleware);
    }

    return {
        ...createStore(reducer, {}, applyMiddleware(...middleWares)), runSaga: sagaMiddleware.run
    }
}

export default configStore;