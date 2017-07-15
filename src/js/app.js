import React from 'react';
import {render} from 'react-dom';

import {History, Router} from './utils/router';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import getRoutes from './routes';
import * as reducers from './reducers';


require('../scss/main.scss');

// Creating Redux Store
const store = createStore(
    combineReducers(reducers),
    applyMiddleware(thunkMiddleware)
);

render(
    <Provider store={store}>
        <Router
            history={History}
            routes={getRoutes(store)}
        />
    </Provider>,
    document.getElementById('app-root')
);
