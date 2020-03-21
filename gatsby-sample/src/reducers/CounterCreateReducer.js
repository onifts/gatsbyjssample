import { handleActions } from 'redux-actions';

import actions from '../actions';

const { INCREMENT, DECREMENT } = actions.CounterAction;

// init data 
const initialState = {
    number: 0
};

// reduce
export default handleActions(
    
    {
        [INCREMENT] : ( state, action ) => ({
            ...state, number: state.number + action.payload
        }),

        [DECREMENT] : ( state, action ) => ({
            ...state, number: state.number - 1 
        }),

    },
    initialState

); // end handleActions

