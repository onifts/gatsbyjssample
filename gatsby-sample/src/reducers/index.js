import { combineReducers } from 'redux' ;

import ChatReducer from './ChatReducer' ;
import CounterCreateReducer from './CounterCreateReducer' ;
import CounterReducer from './CounterReducer' ;

export default combineReducers({

    ChatReducer,
    CounterCreateReducer,
    CounterReducer,
    
    // add reducer 

});

