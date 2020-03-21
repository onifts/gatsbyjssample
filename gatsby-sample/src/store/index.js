import { createStore, applyMiddleware } from "redux";

import reducers from '../reducers';
import loggerMiddleware from '../lib/loggerMiddleware';

export const configureStore = () => {

    //const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

    //return createStore( reducers, devTools );

    return createStore( reducers, applyMiddleware(loggerMiddleware) );
    
} // end configureStore
