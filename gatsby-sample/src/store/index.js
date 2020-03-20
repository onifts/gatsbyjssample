import { createStore } from "redux";
import reducers from '../reducers';

export const configureStore = () => {

    //const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

    //return createStore( reducers, devTools );

    return createStore( reducers );
    
} // end configureStore
