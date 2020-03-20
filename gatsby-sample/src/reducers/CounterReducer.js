
import actions from '../actions';

const { INCREMENT, DECREMENT } = actions.CounterAction;

// init data 
const initialState = {
    number: 0
};

// reducer 
const CounterReducer = ( state = initialState, action ) => {
    
    switch( action.type ) {
        
        case INCREMENT:
            
            return { ...state, number: state.number + action.param , } ;
        
        case DECREMENT:
            
            return { ...state, number: state.number - 1 } ;

        default:
            
            return state ;
        
    } // end switch

} // end CounterReducer

export default CounterReducer;
