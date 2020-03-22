import { createStore, applyMiddleware } from "redux";

import reducers from '../reducers';
//import loggerMiddleware from '../lib/loggerMiddleware';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import penderMiddleware from 'redux-pender';

const logger = createLogger();

export const configureStore = () => {

    //const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

    //return createStore( reducers, devTools );

    //return createStore( reducers, applyMiddleware( loggerMiddleware, ReduxThunk ) );
    return createStore( reducers, applyMiddleware( logger, ReduxThunk, penderMiddleware() ) );
    
} // end configureStore
