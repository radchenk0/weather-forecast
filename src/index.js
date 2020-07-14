import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Api from './api';
import configStore from './store';
import reducer from './reducers';
import saga from './sagas';

import App from './App';
import './assets/index.css';

const store = configStore(reducer);
const api = new Api();
store.runSaga(saga, api)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);