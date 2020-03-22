import { combineReducers } from 'redux' ;
import { penderReducer } from 'redux-pender';

import ChatPenderReducer from './ChatPenderReducer' ;
import ChatReducer from './ChatReducer' ;
import CounterCreateReducer from './CounterCreateReducer' ;
import CounterReducer from './CounterReducer' ;


export default combineReducers({

    pender: penderReducer,
    
    ChatPenderReducer,
    ChatReducer,
    CounterCreateReducer,
    CounterReducer,
    
    // add reducer 

});

