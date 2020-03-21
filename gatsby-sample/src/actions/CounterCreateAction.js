import { createAction } from 'redux-actions';

// Action Type 
const INCREMENT = '@oni/INCREMENT/CREATEACTION' ;
const DECREMENT = '@oni/DECREMENT/CREATEACTION' ;

// Action Creator  
//export const increment = (param=1) => ({ type: INCREMENT, param: param }) ;
//export const decrement = () => ({ type: DECREMENT }) ;

//export const increment = createAction( INCREMENT, param => param ); 
export const increment = createAction( INCREMENT ); // param -> param
export const decrement = createAction( DECREMENT );

export const incrementAsync = (param) => dispatch => {
    
    setTimeout(
        //() => { dispatch(increment(param)) },
        () => { dispatch( { type:INCREMENT, payload:param } ) },
        1000
	);
	
} // end incrementAsync

export const decrementAsync = () => dispatch => {
    
    setTimeout(
        //() => { dispatch(decrement()) },
        () => { dispatch( { type:DECREMENT } ) },
        1000
	);
	
} // end decrementAsync

export {
	INCREMENT,
	DECREMENT,
}
